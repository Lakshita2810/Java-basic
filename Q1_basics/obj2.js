const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const User1 = [
    {
      id: 1,
      name: "lakshita",
      email: "aksh12@gmail.com"  
    },

     {
      id: 1,
      name: "lakshita",
      email: "aksh12@gmail.com"  
    },

     {
      id: 1,
      name: "lakshita",
      email: "aksh12@gmail.com"  
    },
     {
      id: 1,
      name: "lakshita",
      email: "aksh12@gmail.com"  
    },

     {
      id: 1,
      name: "lakshita",
      email: "aksh12@gmail.com"  
    }
] 

User1[1].email
console.log(obj3);




// ----------------------------------------------------------------
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "lakshu"

// }

const {courseInstructor} = course
console.log(courseInstructor);


// {
//    "name": "akshu",
//    "coursename": "js in hindi" ,
//    "price": "free"

// }


[
    {},
    {},
    {}
]

