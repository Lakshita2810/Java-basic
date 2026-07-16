// dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// let newCreateDate = new Date(2024,0, 23)

// let newCreateDate = new Date(2024,0, 23, 5, 3)

let newCreateDate = new Date("2023-01-14")
// console.log(newCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay())



newDate.toLocaleString('default',{
    weekday  : "long"
    
})





