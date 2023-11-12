import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyATnI1uLG-wtfE8b-1VH7MyaFRZOCuDwAk",
    authDomain: "login-sighnup-assighn.firebaseapp.com",
    projectId: "login-sighnup-assighn",
    storageBucket: "login-sighnup-assighn.appspot.com",
    messagingSenderId: "648352120070",
    appId: "1:648352120070:web:4100bed8902c53d0a4b287",
    measurementId: "G-151LS0FGPL"
  };
  
export const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
