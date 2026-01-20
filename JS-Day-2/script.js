// named functions....


// 
function isAdult(age){
    if (age >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(20));
console.log(isAdult(15));


// 
function toCelsius(fahr_val){
    return (fahr_val-32)*(5/9);
}

console.log(toCelsius(132))


// 
const multiply=
function(a,b){
    return a*b;
}
console.log(multiply(2,10));


// 
console.log(subtract(10,5))

const subtract=
function(a,b){
    return a-b;
}