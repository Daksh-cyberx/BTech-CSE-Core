// an object allows us to bundle all the information(different datatypes) into a single, neat package.
// datatype of key always will be string and datatypes of value can be anything.

let user={
    fullname:"Daksh",
    address:"Delhi",
    mobileno:1234567890,
    favcolor:["black","white","blue"]
}

console.log(user.fullname, user.mobileno, user.favcolor[2], user.address) 

// here we access the "Daksh" by using the key "fullname"----
// (user.fullname)


// if we want to access the value, then we have to target key
// if we want to access specific array element, we can access it by using indexing.

// let user2={
//     fullname:"Daksh",
//     address:{
//         district:"Chandeer vihar",
//         city:"Delhi"
//     },
//     mobileno:1234567890,
//     favcolor:["black","white","blue"],
//     demo: function(){
//         return "demo function";
//     }
// }
// console.log(user.fullname, user.mobileno, user.favcolor[2], user.address.city, user.demo());


// Object methods 

//  1) Access all keys of an object
//        Object.keys(objName)
// *** very important***
// RETURN ALL THE KEYS IN AN ARRAY

// 2) Access all the values of an object
//        Object.values(objName)

console.log(Object.keys(user))
// user naam ke object ki saari keys ek array mein aa jayengi

console.log(Object.values(user))
// user naam ke object ki saari values ek array mein aa jayengi


console.log(Object.entries(user))
// return the array in which convert the key 


const car = {
    make: "Mahindra",
    model: "Thar"
};
// we can't add a new key and value pair but we can change or update existing values
// Object.seal(objName)
Object.seal(car);

// we can't add a new key and value pair also can't change or update the existing values
// Object.freeze(objName)
Object.freeze(car);

car.model="XUV700";
car.color="black";
console.log(car)
