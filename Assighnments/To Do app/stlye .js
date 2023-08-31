let inputs=document.querySelector("#inp")
let text=document.querySelector(".text")

function Add(){

 if(inputs.value==""){
    alert("please entr task")
 }else{
let newele=document.createElement("li")


newele.innerHTML=`${inputs.value}`
text.appendChild(newele)
inputs.value="" 
}


}


