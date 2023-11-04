
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjDSK4bHbpEt0nAbFobUcwkPBaieswTlI",
  authDomain: "practice-cd827.firebaseapp.com",
  projectId: "practice-cd827",
  storageBucket: "practice-cd827.appspot.com",
  messagingSenderId: "659462372837",
  appId: "1:659462372837:web:070e914f1b124c5edd430c",
  measurementId: "G-1JNM8KRQ1S"
};


export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// const analytics = getAnalytics(app);
