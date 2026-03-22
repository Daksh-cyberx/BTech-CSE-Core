// promises : has three state - 1.resolve, 2.reject, 3.pending

let myPromise = new Promise((res, rej)=>{
    let data = "this is my data getting from somewhere";
    if(data){
    res(data);
    } else{
        
    }
}); //we created a promise function using promise constructor.
console.log(myPromise);