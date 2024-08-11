// immediately invoked function expression(iife)

// function chai()
// {
//     console.log(`db connected`); 
// }
// chai()

(function chai() {   //named iifi
    console.log(`db connected`); //iife ,jo function immediately execute hojaye
})();                            // to remove pollution of global scope varaibles


(
    () => {
        console.log(`DB connected`);  // ()() //iife
    }                                 // ()=>{} //arrow function
)()

    // ((name) => {
    //     console.log(`DB connected ${name}`);
    // })('dharam')

    


