let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)//NaN not a number

let score1 = null

console.log(typeof score)

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) // 0 print

let score2 = undefined

console.log(typeof score)

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2) //NaN

// "33" => 33
// "33abc"=>NaN
//true => 1; false=>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1=> true ; 0=> false
// ""=>false; "dharam"=>true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber); //string

// ****************Operations********************************

let value = 3
let negValue = -value
console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/4);
// console.log(2%2);

let str1 = "hello"
let str2 = " dharam"
let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 //string pehle to puri string
console.log(1 + 2 + "2"); // 32  //number pehle to add krdo fir string


console.log(true);
console.log(+true); // 1

console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // bad way

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCounter1 = 100
++gameCounter1;
console.log(gameCounter1);

let gameCounter2= 100
// gameCounter2++;
console.log(gameCounter2++);





















