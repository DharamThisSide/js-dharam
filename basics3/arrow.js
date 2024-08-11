const user ={
    username:"dharam",
    price:999,
    welcomemsg: function(){
        console.log(`${this.username},welcome to website`);   //current context ke liye this ka use krte h
        console.log(this);
        
    }
}

// user.welcomemsg()

// user.username="sam"
// user.welcomemsg()

// console.log(this);//empty  in nodejs

// function chai(){
//     let user="dharam"
//     console.log(this);  
// }
// chai()



// const chai = () =>{
//     let user="dharam"
//     console.log(this);//empty object
// }
// chai()

//implicit return arrow function
const addtwo=(num1,num2) => {
    return num1+num2
}

const addtwo1=(num1,num2) => (num1+num2)
const addtwo2=(num1,num2) => ({username:"dharam"})



console.log(addtwo2(6,8))




