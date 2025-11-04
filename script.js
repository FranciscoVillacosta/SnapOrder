let pedido = [];
let total = 0;

function agregarPedido(nombre, precio) {
  pedido.push({ nombre, precio });
  total += precio;
  mostrarPedido();
}

function mostrarPedido() {
  const lista = document.getElementById("lista-pedido");
  const totalElem = document.getElementById("total");
  lista.innerHTML = "";
  pedido.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
  totalElem.textContent = `Total: $${total}`;
}

function enviarWhatsApp() {
  if (pedido.length === 0) {
    alert("Agrega al menos un producto.");
    return;
  }

  const numero = "5211234567890"; // Cambia por el número del restaurante
  let mensaje = "Hola! Quiero hacer un pedido:\n";
  pedido.forEach(item => {
    mensaje += `- ${item.nombre} - $${item.precio}\n`;
  });
  mensaje += `\nTotal: $${total}`;
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url);
}
