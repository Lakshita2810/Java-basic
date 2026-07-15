// primitive 
//  7 types : String , Number ,Boolean , Null , Symbol , Undefined, BigInt

// js is a dynamically type language



const score = 33  // number
const name = "neha" // string
const isLoggedIn = false // boolean
const outsideTemp = null  // null
let userEmail; // undefined

const id = Symbol('123') // symbol #unique value stored
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 124485848472747732737187302203043333n  //bigint
console.log( typeof bigNumber);




// Reference ( Non primitive )
// Array , Objects , Fuctions

const heros = ["saktiman", "naagraj", "dogaa"];   //array
let myObj = {
    name: "hitesh",
    age: 22,

}  //object

const myFunction = function(){
    console.log("hello world");
}   //function
console.log(typeof myFunction);
// all Non primitive datatypes is object type