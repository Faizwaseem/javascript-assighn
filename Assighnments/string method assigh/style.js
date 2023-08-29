

// let myName = 'MuHAmmAd ABduLlah KhAn';
// let myname = prompt('enter your sentence');
// console.log(myName.slice(0 , 1))
// let nameArr = myName.split(' ');
// console.log(nameArr);
// console.log(nameArr[1]);
// let result = [];
// for (let i = 0; i < nameArr.length; i++) {
//     console.log(nameArr[i].slice(0 , 1));
//     let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
//     let lastLetter = nameArr[i].slice(1).toLowerCase();
//     let completeLetter = firstLetter + lastLetter;
//     result.push(completeLetter);
// }

// console.log(result.join(' '));










// let myname='muhammad faIz aHmEd'
// let myName= prompt("Enter Your Name")

// console.log(myname.slice(0,1) )

// let namearr=myname.split(' ')

// console.log(namearr)

// console.log(namearr[1])

// let result=[]

// for(let i=0; i<namearr.length; i++){

// console.log(namearr[i].slice(0,1))
// let firstletter=(namearr[i].slice(0,1).toUpperCase)
// let lastletter=(namearr[i].slice(1).toLowerCase)
// let complete =firstletter+lastletter
// result.push(complete)
// }
// console.log(result.join(' '))







function capitalfirstletter(sentence){

let nameArr =sentence.split(' ')


let result = [];
for (let i = 0; i < nameArr.length; i++) {
    
    let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
    let lastLetter = nameArr[i].slice(1).toLowerCase();
    let completeLetter = firstLetter + lastLetter;
    result.push(completeLetter);
}

 return  result.join(' ');

}

let myName=prompt('Enter Your Name')

let capitalizesentence=capitalfirstletter(myName)

console.log(capitalizesentence)
// sdafdfddf

// function capitalfirstletter(sentence){
//     let nameArr=sentence.split(' ')
//     let result=[]



// for(let i=0; i<nameArr.lenght; i++){

//     let firstLetter=nameArr[i].slice(0,1).touppercase()

// let lastLetter=nameArr[i].slice(1).tolowercase()

// let completeLetter=firstLetter+lastLetter

// result.push(completeLetter)
// }
// return result.join(' ')
// }
// let myName=prompt('Enter Your Name')
// let capitalizesentence=capitalfirstletter(myName)

// console.log(capitalizesentence)























