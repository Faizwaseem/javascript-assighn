const email=document.querySelector('.inp1')
const pass=document.querySelector('.inp2')
const btn=document.querySelector('.btn')

import { auth } from "./config";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


btn.addEventListener('submit',()=>{
// e.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
       
      const user = userCredential.user;
    console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });


})
