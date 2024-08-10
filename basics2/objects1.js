// object using constructor
// const tinderuser =new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="dharam"
tinderuser.isloggedin=false

// console.log(tinderuser);

const regularuser ={
    email:"some@gmaiil.com",
    fullname:{
        userfullname:{
            firstname:"dharampal",
            lastname:"choudhary"
        }
    }
}
console.log(regularuser.fullname?.userfullname); //? agr h to kro

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)// {}isme sare ibject jayege
// const obj4=Object.assign(obj1,obj2) // obj1 me chle jayege sare object

const obj4={...obj1,...obj2}
console.log(obj4); 


const users =[
    {
        id:1,
        email:"gmail.com",
    },
    {

    },
    {

    }
]

users[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser)); // output array me ayega
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));


// object destructure*************


const course={
    cname:"js",
    price:"999",
    instructor:"dharam"
}

// course.instructor

const{instructor} =course

console.log(instructor);

// const navbar=({company})=>{
                                   // destructure of objects
// }
// navbar(company="hitesh")





// api gives data in json and array format


//json structure
// {
//     "name":"dharam",
//     "cname":"js",
//     "price":"999"
// } 


// array 
//[
//      {},
//      {},
//      {}
// ]