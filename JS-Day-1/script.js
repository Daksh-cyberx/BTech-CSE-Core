// Types of function

// 1.Regular function

function sample(a){               
    console.log(a,"sample");
}
sample(5)
// a is called parameter

// 2.Arrow function

const sample=()=>console.log("sample")
sample()

const sample=(a,b)=>{
    return a+b
}
console.log(sample(5,10))


// advantages of arrow function

// 1. don't need return function
// 2. arrow function is asyncronus function

// whenever in arrow function, we go to another line of code we use curly bracket and curly bracket becomes the block scope and we have to use return keyword....


// 3.Callback function
// in callback function, if we pass a function as a argument inside another function, then we call it callback function...

function sample(callback){
    console.log("sample");
    callback();
}
function demo(){
    console.log("demo");
}
sample(demo);