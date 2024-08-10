// singleton =>object from constructor => single instance
//Object.create

// object literals => not singleton

const sym = Symbol("key1")

const JsUser = {
    name: "dharam",
    "fullname": "dharampal",  // cannot be accessed by dot operator
    age: 23,
    [sym]: "mykey1", // symbol ka syntax
    location: "jaipur",
    email: "@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[sym]);
// console.log(typeof JsUser[sym]);


JsUser.email = "dp@gmail.com"
// Object.freeze(JsUser) // ab ispe changes in ho skte
JsUser.email = "micro@gmail.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello js user");
}
console.log(JsUser.greeting); //function return backed not exceuted
console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(JsUser.greeting2());











