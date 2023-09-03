// let inputs=document.querySelector("#inp")
// let text=document.querySelector(".text")

// function Add(){

//  if(inputs.value==""){
//     alert("please entr task")
//  }else{
// let newele=document.createElement("li")


// newele.innerHTML=`${inputs.value}`
// text.appendChild(newele)
// inputs.value="" 
// }
// }





// const inputs=document.querySelector("#inp")
// const ol=document.querySelector("ol")

// let todo=[]
// function add(){

//    if(inputs.value==""){
//       alert("please enter a task")
//    }
//    // e.preventDefault()
// ol.innerHTML=""
// todo.push(inputs.value)

// // console.log(todo)

// for(let i=0; i<todo.length;i++){

//    ol.innerHTML=ol.innerHTML+`<li>${todo[i]}</li> <button onclick='edits(${i})'>edit</button>
//     <button onclick='delete(${i})'>delete</button>  `




// }
// inputs.value=""
// }

// function edits(index){
// ol.innerHTML=""
// let uservalue=prompt("enter your corect task")

// todo.splice(index,1, uservalue)

// for(let i=0; i<todo.length;i++){

//    ol.innerHTML=ol.innerHTML+`<li>${todo[i]}</li> <button onclick="edits(${i})">edit</button>
//     <button onclick="deletes(${i})">delete</button>  `

// }

// console.log(todo)

// }

// function deletes(index){

// ol.innerHTML=""
// todo.splice(index,1)
// for(let i=0; i<todo.length;i++){

//    ol.innerHTML=ol.innerHTML+`<li>${todo[i]}</li> <button onclick="edits(${i})">edit</button>
//     <button onclick="delete(${i})">delete</button>  `
//    }

//    //  console.log(todo)
//    }





// const inputs=document.querySelector("#inp")
// const ol=document.querySelector("ol")

// let todo=[]
// function add(){
// // e.preventdefault()
// if(inputs.value==""){

// alert('please enter a task')
// }

// ol.innerHTML=''

// todo.push(inputs.value)

// // console.log(todo)

// for(let i=0; i<todo.length;i++){

// ol.innerHTML=ol.innerHTML+`<li>${todo[i]}</li> <button onclick='editsvalue(${i})'>edit </button> 
// <button onclick='deletes(${i})'>delete</button>  ` 

// }
// inputs.value=""

// }
   
   
// function editsvalue(index){
// ol.innerHTML=""
// let uservalue=prompt("enter your corect task")

// todo.splice(index,1, uservalue)

// for(let i=0; i<todo.length;i++){

//    ol.innerHTML=ol.innerHTML+`<li>${todo[i]}</li> <button onclick='edits(${i})'>edit</button>
//     <button onclick='deletes(${i})'>delete</button>  `

// }

// console.log(todo)

// }
// function deletes(index){
// ol.innerHTML=''

// todo.splice(index,1)
// for(let i=0; i<todo.length;i++){

//     ol.innerHTML=ol.innerHTML+`<li>${todo[i]}</li> <button onclick='edits(${i})'>edit</button>
//      <button onclick='deletes(${i})'>delete</button>  `
 
//  }

// }
   


const inputs=document.querySelector("#inp")
const ol=document.querySelector('ol')

let todo=[]

function add(){

    ol.innerHTML=""
todo.push(inputs.value)

if(inputs.value==""){

    alert('please enter a task')
}


for(let i=0; i<todo.length; i++){

ol.innerHTML+=`<li>${todo[i]}</li> <button onclick=edits(${i})>edit</button> 
<button onclick=deletes(${i})>delete</button>   `

}
inputs.value=""
}

function edits(index){

ol.innerHTML=""

let uservalue=prompt("enter edit a task")

todo.splice(index,1, uservalue)
for(let i=0; i<todo.length; i++){

    ol.innerHTML+=`<li>${todo[i]}</li> <button onclick=edits(${i})>edit</button> 
    <button onclick=deletes(${i})>delete</button>   `
    
    }

}


function deletes(index){
ol.innerHTML=""
todo.splice(index,1)
for(let i=0; i<todo.length; i++){

    ol.innerHTML+=`<li>${todo[i]}</li> <button onclick=edits(${i})>edit</button> 
    <button onclick=deletes(${i})>delete</button>   `
    
    }


}






























