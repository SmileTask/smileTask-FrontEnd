// Import the functions you need from the SDKs you need
import { app } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, getDoc, updateDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

// inicializacion de authentication
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// obtencion de uid
const user = auth.currentUser;

// dom elements
const signUp = document.querySelector("#signUp-form");
const signIn = document.querySelector("#signIn-form");
const logout = document.querySelector("#btn-logout");
const containerApp = document.querySelector('#containerApp')

// registro de usuarios
signUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#signUpEmail").value;
  const password = document.querySelector("#signUpPassword").value;
  const btnIn = document.querySelector("#signIn-btn");
  const btnUp = document.querySelector("#signUp-btn");
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      saveCollection(uid, "Hola", "Gracias por usar nuestros servicios");
      $("#signUp").modal("hide");
      signUp.reset();
      logout.classList.remove("addHide")
      containerApp.classList.remove("addHide")
      btnIn.classList.add("addHide")
      btnUp.classList.add("addHide")
      Swal.fire({
        position: "Center",
        icon: "success",
        title: "Te has registrado correctamente :D",
        showConfirmButton: false,
        timer: 2500,
      });
    })
    .catch((res) => {
      signUp.reset();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este correo ya esta siendo usado, lo sentimos :/",
        showConfirmButton: false,
        timer: 2500,
      });
    });
});

// salir de la sesion
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    logout.classList.add("addHide");
    window.location.href = '../../index.html'
    containerApp.classList.add("addHide")
    Swal.fire({
      position: "Center",
      icon: "success",
      title: "Gracias por tu tiempo, vuelve pronto",
      showConfirmButton: false,
      timer: 2500,
    });
  });
});

// crear colleccion segun el uid del usuario
const saveCollection = (id, titleToDo, descriptionToDo) =>
  addDoc(collection(db, id), {
    titleToDo: titleToDo,
    descriptionToDo: descriptionToDo,
  });

const onGetTask = (uid, querySnapshot) => onSnapshot(collection(db, uid), querySnapshot)
const deleteTask = (uid, id) => deleteDoc(doc(db, uid, id))
const getTask = (uid, id) => getDoc(doc(db, uid, id))
const updataTask = (uid, id, newField) => updateDoc(doc(db, uid, id), newField)

export { 
  auth, 
  onAuthStateChanged, 
  getDocs,
  getTask, 
  saveCollection,
  onGetTask,
  deleteTask,
  updataTask
};
