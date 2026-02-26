console.log("a");  //synchronos code
setTimeout(()=>{       // asynchronos code - it does not block the next line code , runs simultaneously with another code
    console.log("b")   // but in console, first execute will be synchronos code, then asynchronos code 
}, 5000);
setTimeout(()=>{
    console.log("c")
}, 3000);
setTimeout(()=>{
    console.log("d")
}, 2000);
console.log("e");