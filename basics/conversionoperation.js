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

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1=> true ; 0=> false
// ""=>false; "dharam"=>true

let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);








