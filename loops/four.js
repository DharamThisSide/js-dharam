//for in loop

const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swiftt"
}

for(const key in obj){
    console.log(key);  // keys aajyegi
    
}
for(const key in obj){
    console.log(obj[key]);  // keys aajyegi
    
}

const prog=["js","cpp","c"]
for(const key in prog){
    console.log(key)  // array ki keys index hoti h
}