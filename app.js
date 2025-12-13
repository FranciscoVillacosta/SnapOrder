import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzNYhRfwZ2U9B5oElbJ6eOw6gjPKo-FqI",
  authDomain: "portal-alumnos-acuna.firebaseapp.com",
  projectId: "portal-alumnos-acuna",
  storageBucket: "portal-alumnos-acuna.firebasestorage.app",
  messagingSenderId: "763419040376",
  appId: "1:763419040376:web:da98efffbd6cb754b06b8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;

    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists() || !snap.data().rol) {
      alert("Perfil incompleto. Contacta al administrador.");
      return;
    }

    localStorage.setItem("rol", snap.data().rol);
    window.location.href = "prueb.html";

  } catch (e) {
    alert("Usuario o contraseña incorrectos.");
    console.error(e);
  }
};
