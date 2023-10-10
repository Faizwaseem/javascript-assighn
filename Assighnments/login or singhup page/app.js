
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
const UserD = {
    user:input1.value, 
    pass: inputlog2.value,
}
    // logarr.push(input1.value,inputlog2.value)
    logarr.push(UserD)
    console.log(logarr)
    input1.value=''
    inputlog2.value=''
    
    const Array = JSON.stringify(logarr)
    localStorage.setItem("item", Array)
})


// sighnarr=[]


submitsighn.addEventListener('click', function(){

    console.log(input2.value )

})

const items = JSON.parse(item)
localStorage.getItem("data", items)
// localStorage.getItem(Arr)

console.log()


