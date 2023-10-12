const div=document.querySelector('#container')

const start=document.querySelector('#start')

const stop=document.querySelector('#stop')
    

const reset=document.querySelector('#reset')


let seconds=0
let interval;

start.addEventListener('click', function(){

interval=setInterval(()=>{

   seconds+=1;
div.innerHTML=seconds



},1000)

start.disabled=true





   })


stop.addEventListener('click',function(){


clearInterval(interval)



start.disabled=true


})

 reset.addEventListener('click',function(){


clearInterval(interval)

div.innerHTML=''

start.disabled=false





})
