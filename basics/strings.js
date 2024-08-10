const name = "dharam"
console.log(name.length)
const repoCount=50

console.log(name+repoCount+" value"); //outdated

// use bacticks instead

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //string interpolation

const gameName = new String('dharam-pal')
console.log(gameName[0]);//d

console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName) // original string doesnot change
console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf('a')); //2

const newString =gameName.substring(0,4)
console.log(newString)//dhar

const anotherString= gameName.slice(0,4)
console.log(anotherString)

const anotherString1= gameName.slice(-9,4)
console.log(anotherString1)

const anotherString3= "      dharam  "
console.log(anotherString3)
console.log(anotherString3.trim())//whitespace hta deta h

const url="https://dharam.com/dharam%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('dharam'));

console.log(gameName.split('-'));


