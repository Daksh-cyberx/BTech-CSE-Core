console.log("a");  //synchronos code - it block the next line code
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

// callback hell:                            //This pyramid like structure called "Pyramid of Doom" in which
setTimeout(()=>{                             //Disadvantages of Callback hell:
    console.log("a");                        //1. appearance is bad
    setTimeout(()=>{                         //2. difficulty in debugging in code
        console.log("b");                    //3. hard to read
        setTimeout(()=>{                     
            console.log("c");
            setTimeout(()=>{
                console.log("d");
                setTimeout(()=>{
                    console.log("e");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);