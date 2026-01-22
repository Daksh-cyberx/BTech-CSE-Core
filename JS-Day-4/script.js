

let arr=[-5,2,4,-10,-7,9]
let res=[]

while (arr.length>0){
    let val = arr.shift();
    if (val>0){
        res.push(val)
    }
}
// console.log(res)


//  Q3. check if array is plaindrome or not.

// let arr1=[1,2,3,4,3,2,1]
// i=0
// j=arr1.length-1
// while (i<j){

// }






// sir's method:

function palindrome(){
    let arr2 = [1,2,3,4,3,2,1];
    let original = [];
    let reverse = [];
      // copy all the elements of given array to an original array because during solving arr2 can become destructured..

    for (i = 0; i < arr2.length; i++){    // its called iterate karna
        original.push(arr2[i]);
    }
    //reverse the given array
    while (arr2.length > 0){
        reverse.push(arr2.pop())
    }
    for (let i = 0; i < original.length; i++){
        if (original[i] !== reverse[i]){
            return "not a palindrome"
        }
    }
    return "its a palindrome"
}
console.log(palindrome())