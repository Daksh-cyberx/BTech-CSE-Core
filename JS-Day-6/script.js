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