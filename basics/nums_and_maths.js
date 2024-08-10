//num
const score=400
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 2 value tak point ke bad

const otherNumber =123.8966
console.log(otherNumber.toPrecision(3)); // string me covert krdega and round off bhi ,priority decimal ke pehle milti h

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//+++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++
console.log(Math);//object with some method

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4.6,9,0));
console.log(Math.max(4.6,9,0));

console.log(Math.random()); // 0 se 1 ke bich me value

console.log((Math.random()*10)+1); //1 se 10 tak

const min=10
const max=20


console.log(Math.floor(Math.random()*(max-min+1))+min);//range me jab random number chaiye ho to


















