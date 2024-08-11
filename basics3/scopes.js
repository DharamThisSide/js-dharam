//block ke andar likha vo block scope ,block ke bahar likha vo global scope
// var c=300; // var change hojata h

let a=300;

if(true){
    let a=10;
    const b=20;
    // var c=30; // overright
    // console.log("inner: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(a); 

function one(){
    const username="dharam"

    function two(){
        const website="youtube"
        console.log(username);
    }

    // console.log(website);
    two();
    
}
// one();

if(true){
    const username="dharam"
    if(username==="dharam"){
        const website="youtube"
        // console.log(username+website)
    }
    // console.log(website);//error
    
}
// console.log(username); // error

// **************************** interesting **********************************

function addone(num){
    return num+1 // isme koi farak nhi pdta kaha bhi likho
}
addone(5)

const addtwo = function(num){
    return num+2     // is case me function pehle likha jana chaiye
}
addtwo(2)











