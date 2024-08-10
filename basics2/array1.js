const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc = ["flash", "superman", "batman"]

// marvel_heroes.push(dc)
// console.log(marvel_heroes); // array ke andar array
// console.log(marvel_heroes[3][1]);

const newhero=marvel_heroes.concat(dc)
//console.log(newhero); // isme array ke nadar array nhi h

const all_new_heroes=[...marvel_heroes,...dc] // spread opertor
//console.log(all_new_heroes);

const arr3=[1,2,3,[4,5,6],7 [6,7,[4,5]]]
const realarr3 = arr3.flat(Infinity)
console.log(realarr3);


console.log(Array.isArray("dharam"))
console.log(Array.from("dharam"));
console.log(Array.from({name:"dharam"})); // return empty array *****important

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));









