// credenciales de utilizacion firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-DSkouZhjcmqIORZuvYTjWGx8JP5MOQ",
  authDomain: "todo-app-37f12.firebaseapp.com",
  projectId: "todo-app-37f12",
  storageBucket: "todo-app-37f12.appspot.com",
  messagingSenderId: "203360323661",
  appId: "1:203360323661:web:1c460e485c7bf254693404",
  measurementId: "G-0Z8VTN1B89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}
