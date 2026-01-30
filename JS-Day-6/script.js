let sentence = "I am a comma seperated sentence";
let words = sentence.split("a"); // we split the "a" word from the sentence variable
console.log(words);
console.log(sentence.length);

let sentences = "I am a comma seperated sentence";
let word = sentence.split(" "); // we split the " "(space) from the sentence variable
console.log(word);


// find out the occurence of "r" in the given text by using split method

let str = "tu meri me tera me tera tu meri"

let word3= str.split("r");
console.log(word3);

let count = word3.length-1  // word3 ki length se hame sirf 1 minus karna hai for find occurence of "r"
console.log(count);


// 1. Regular function:












// 2. Callback function
function sample(callback){
    console.log("sample")
    callback();
}

function demo(){
    console.log("demo")
}
sample(demo);
//  callback function is a asynchronous function because it will do another task with previous task with simultaneously.

// 3. Arrow function

const demo2=()=>console.log("demo")
demo2();



// 4. First class function
// 1. we can treat a variable as a function
// 2. we can pass a function as an argument inside another function
// 3. we can return a function from a function (function curring, attach the function to a variable, then call the variable)

// example of third point....
function test(){
    return function test2(a){
        console.log("test2")
        return function test3(b){
            console.log("test3")
        }
    }
}
let value = test()
let value2 = value(5)
value2()
// test()()()


// 5. Higher order function
    // map, filter, reduce


// 6. Anonomous function
    //   which function have not any name

    //   like setTimeout , etc

    // setTimeout(()=>{

    // },1000)


// 7. Self invoking function(IIFE):

// to obtain data privacy and to call a function imediately after the function scope.

let test5 = (function(){
    return "sample5";
})()
console.log(test5)   // if we give any another statement between calling and declare, it will not invoke/call