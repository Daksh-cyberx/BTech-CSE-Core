// 1. setTimeout() :-
//setTimeout() is used to execute a function after some specified delay.

console.log("hiiii")
let timer1 = setTimeout(() => {
    console.log("hello")
}, 3000);

let timer = setInterval(() => {
    console.log("heheheh")
}, 4000);
console.log(timer);

clearTimeout(timer1);

