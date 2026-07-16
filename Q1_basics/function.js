function sayMyName(){
    console.log("L");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H"); 
    
}

// sayMyName()

function addTwoNumbers(num1, num2){
return num1 + num2
    
}
 const result = addTwoNumbers(4 , 5)

//  console.log("Result:", result);
 
function loginUserMsg(username){
    if(username === undefined){
        console.log("please enter name");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("hitesh"));

// --------------------------------------------------------

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500 , 2000));

const user = {
    username: "heeysh",
    price: 140
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and its price is ${anyobj.price}`);
    
}

handleObject(
    {
        username: "sem",
        price: 344
    }
)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]

    
}

console.log(returnSecondValue(myNewArray));

