
const submitlog=document.querySelector('#submitlog')
const submitsighn=document.querySelector('#submitsighn')

const input1 =document.querySelector('.input1')
const inputlog2 =document.querySelector('.inputlog2')

const input2 =document.querySelector('.input2')
const inputsighn2 =document.querySelector('.inputsighn2')


// const loginput=document.querySelector('.input1')
// const sighninput=document.querySelector('.input2')



logarr=[]
submitlog.addEventListener('click', function(){


    logarr.push(input1.value,inputlog2.value)
console.log(logarr)
input1.value=''
inputlog2.value=''
// console.log(input1.value, inputlog2.value)



})



// sighnarr=[]


// submitsighn.addEventListener('click', function(){

//     console.log(input2,inputsighn2)

// })





