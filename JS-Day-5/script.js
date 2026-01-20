// practice problems on callback function, arrow functions and higher-order functions

// 1.
function processOrder(orderID, callback){
    console.log('processing order #$ {orderID}...')
        callback();
}
function message(){
    console.log("order complete! sending sms...")
}
processOrder(5522, message);


// 2.
function transformArray(arr, transformer){
    let result = []; // create a new array to store results..

    //loop through each item in the original array...
    for (let i = 0; i < arr.length; i++){
        // pass the current element to the 'transformer' callback
        // and push the modified value into our new array

        result.push(transformer(arr[i]));
    }

    return result;
}

const numbers = [1,2,3,4,5]
const doubled = transformArray(numbers, n => n*2)
console.log(doubled)


// 3.
function smartDivide(num1, num2, successCallback, errorCallback){
    if (num2 == 0){
        return errorCallback("cannot divide by zero!");
    }else {
        return successCallback(num1, num2);
    }

}
const number = smartDivide(1, 2, (a, b) => a/b, (err) => err);
console.log(number);

const number2 = smartDivide(1, 0, (a, b) => a/b, (err) => err);
console.log(number2);