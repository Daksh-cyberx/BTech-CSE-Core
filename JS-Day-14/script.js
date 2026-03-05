// 1. setTimeout() :-
//setTimeout() is used to execute a function after some specified delay.

// console.log("hiiii")
// let timer1 = setTimeout(() => {
//     console.log("hello")
// }, 3000);

// let timer = setInterval(() => {
//     console.log("heheheh")
// }, 4000);
// console.log(timer);

// clearTimeout(timer1);

// //Topic:- Promise

// let pro1 = new Promise((resolve, reject) => {
//     let b = 11;
//     if (b>20){
//         resolve();
//     }else{
//         reject();
//     }
// })
// pro.then(()=>console.log("promise resolved"))
// .catch(()=>console.log("promise rejected"))


// function pro(){
//     return new Promise((resolve, reject) => {
//         let a = 10;
//         if (a>50){
//             resolve();
//         }else{
//             reject()
//         }
//     })
// }
// pro()
// .then(()=>console.log("promise resolved"))
// .catch(()=>console.log("promise rejected"))
// .finally(()=>console.log("inside finally"))


//guess the output and explain the reason behind it..
console.log("a")
setTimeout(()=>{
    console.log("b")
}, 0)
setTimeout(()=>{
    console.log("c")
}, 5000)
Promise.resolve().then(()=>{
    console.log("promise")
})
setTimeout(()=>{
    console.log("d")
}, 2000)
console.log("e")