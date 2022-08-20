import { app } from "./firebase.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

// inicializacion de authentication
const auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// obtencion de uid

// credenciales y btn submit
const form = document.querySelector("#formCredentials")


// iniciar sesión con usuarios registrados
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#signInEmail").value;
    const password = document.querySelector("#signInPassword").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        form.reset();
        Swal.fire({
          position: "Center",
          icon: "success",
          title: "Sesión iniciada :D",
          showConfirmButton: false,
          timer: 2500,
        });
        setTimeout(() => {
            window.location.href = './task.html'
        }, 2500)
      })
      .catch((res) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo anda mal con tus credenciales!",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  });