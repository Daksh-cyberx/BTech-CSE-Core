function greet(){
    console.log("hello!");
};
greet();// it prints the "hello!" in the console but does not return anything means undefined.

let result = greet();
console.log(result);// it shows undefined because in variable result we store the value which returns from that function but it return nothing.

//Higher order function (HOF):-
//1. takes another function as an argument
function greet1(name){
    return "hello" + name ;
}
function processUser(callback){
    console.log(callback("Daksh"));
}
processUser(greet1);
const process = processUser(greet1);
console.log(process);

//2. returns another function
function outer(){
    return function inner(){
        console.log("hello");
    };
};
const concept = outer();
console.log(concept);
concept();
outer()();


//Callback function:-
function greet2(name1 = "Daksh"){
    console.log("hello" + name1);
}
function processUser1(callback){
    return callback;
}
const process1 = processUser1(greet2);
console.log(process1);
process1();
