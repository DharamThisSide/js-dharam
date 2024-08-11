//for rach loop
const coding=["js","c++","java","python","ruby"]

coding.forEach(  function ( item){
    console.log(item)
} )


coding.forEach((item)=>{
    console.log(item);   
    
})


function printme(item){
    console.log(item)
}
coding.forEach(printme)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const mycoding=[
    {
        ln:"javascript",
        lnfilename:"js"   
    },
    {
        ln:"java",
        lnfilename:"java"   
    },
    {
        ln:"pyhton",
        lnfilename:"py"   
    }
]


mycoding.forEach((item)=>{
    console.log(item.ln)     // loop on array of objects
})
