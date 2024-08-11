const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const nnum=myNumers.map((num)=>{return num+10})

const nnum=myNumers.map((num)=>{return num*10})
                    .map((num)=>{return num+1})   // chaining
                    .filter((num)=>{return num>=40})
console.log(nnum);


