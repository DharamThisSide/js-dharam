// primitive => call by value
// 7 types : string, number, boolean, null, undefined, symbol, Bigint

const score=100;// Dynamically typed langauage
const scoreVal= 100.3;
const isLoggedIn = false;
const temp=null;
let userEmail; // undefined
const id= Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);

const bigNumber=324235n;
console.log(bigNumber);

 

// Reference type=>Non primitive 
// arrays, objects, functions

const heros =["hulk","doga","ironman"];

let student = {
    name:"dharam", // object
    age:22,
};

const myFunction = function(){
    console.log("hello world");
}
myFunction();



// +++++++++++++++++++++++++++++++++++++++++++++

// Stack memory=>primitive isme copy ka use hota h and Heap memory=> non primitive me use isme reference milta h

let myName="dharampal" 
let anotherName = myName
anotherName="dharam"

console.log(myName);

console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi:"user@ybl",
};
let user2=user1;

user2.email = "dharam@gmail.com";

console.log(user1.email);
console.log(user2.email);



