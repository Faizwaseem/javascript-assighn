const div=document.querySelector('div')
const P=document.querySelector('p')

let fruits=['Apple', 'Banana','Orange','Chiko','Mango','Amrood','Kiwi','Lemon','Peach','Watermelon','Strawberry','Dates','kharbooza']

let newfruits=['Apple,', 'Banana,','Orange,','Chiko,','Mango,','Amrood,','Kiwi,','Lemon,','Peach,','Watermelon,','Strawberry,','Dates,','kharbooza']

for(let i=0; i<fruits.length;i++ ){

div.innerHTML+=`<button onclick='addsfruit(${[i]})'>${fruits[i]}</button>  `


}

function addsfruit(i){

P.innerHTML+=(newfruits  [i])    


}




