// function saymyname()
// {
//     console.log("dharam")
// }
// saymyname()

// function addtwo(num1,num2) //parameters
// {
//     console.log(num1+num2);  
// }
function addtwo(num1,num2) //parameters
{
    // let result=num1+num2;
    // return result; 
    return num1+num2
    console.log("dharam");//will never execute    
}
const result=addtwo(2,6)//arguments
// addtwo()//NaN

// console.log(result);

function loginmsg(username)
{
    if(username===undefined){
        console.log("please enter username")
        return
    }
    return `${username} jsut logged in`
}
// console.log(loginmsg("dharam"))
console.log(loginmsg()); //undefined


function calculateprice(...num1)//...rest operator
{
    return num1
}
// console.log(calculateprice(200,400,500))

const user={
    username:"dharam",
    price:99
}

function handleobject(anyobject)
{
    console.log(`username is ${anyobject.username} and pice is ${anyobject.price}`)
}
handleobject(user)

const arr=[1,2,3,4]
function retsec(a)
{
    return a[1]
}
console.log(retsec(arr));