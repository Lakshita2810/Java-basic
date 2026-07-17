const user = {
    username: "akshu",
    price: 999,
    welcomeMsg: function() {

        console.log(`${this.username} , welcome to website`);   
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.username = "sem"
// user.welcomeMsg()

// console.log(this);


// function chai() {
//     console.log(this);
       
// }
// chai()


const chai = function() {
    let username = "akshu"
    console.log(this);
    
}


const addTwo = (num1 , num2) =>  num1 + num2


console.log(addTwo(3,5));
