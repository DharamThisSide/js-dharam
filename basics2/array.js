//array

const arr=[0,1,2,3,4,6,5]
// console.log(arr);

const hero=["ironman","batman","superman"]

const arr2= new Array(1,2,3,4,5)
// console.log(arr2[1]);

// array methods

arr2.push(6)
arr2.push(7)
arr2.pop() // remove the last element

arr2.unshift(9)//add in the first position
arr2.shift()//starting vala hatt jayega
// console.log(arr2);

// console.log(arr2.includes(9));
// console.log(arr2.indexOf(4));


const newarr=arr2.join() // string type me bind krke dedega
// console.log(newarr);

//***********slice ,splice***************

console.log("A ",arr2);

const myn1= arr2.slice(1,3)//original array ko manipulate nhi karega
console.log(myn1);

console.log("B ",arr2)

const myn2= arr2.splice(1,3) // orginal array ko manipulate karega
console.log("C ",arr2)
console.log(myn2);

















