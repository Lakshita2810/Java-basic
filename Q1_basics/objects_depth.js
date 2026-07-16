// singleton
// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "lakshita",
    age: 18,
    [mySym] : "myKey1",
    location: "surat",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}
// console.log(jsUser[mySym]);
// jsUser.email = "lakshita@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "laskhita@123.com"
// console.log(jsUser);

console.log(Object.getOwnPropertySymbols(jsUser));




jsUser.greeting = function(){
    console.log("hello js user");
    
}



jsUser.greetingTwo = function(){
    console.log(`hello use, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
