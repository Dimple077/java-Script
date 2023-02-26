console.log("Dimple kumar");
// primitive
// Type : 7 String , number, null, boolean , undefind, Symbol,  bigInt

const Score = 100
const ScoreValue = 100.3
const isLoggedIn = false
const outideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId)

console.log(anotherId); 

const bigNumber = 123456789426n
// console.log(bigNumber)



// reference type (No primitive)

// Array , objects, functions

const Heros = ["shaktiman" , "naagraj","doga"]
let myOBJ={
    name:"dimple",
    age:26,
}

const myFunctions = function name() {
    console.log('function ')

    
}
console.log(typeof myFunctions) //function
console.log(typeof Score ) // Number
console.log(typeof ScoreValue ) //Number
console.log(typeof isLoggedIn ) //boolean
console.log(typeof outideTemp ) //object
console.log(typeof userEmail) //undefined
console.log(typeof id) //symbol
console.log(typeof myOBJ ) //object
console.log(typeof myFunctions) // funtion
console.log(typeof Heros) //object
console.log(typeof bigNumber) // bigInt


//*---javascript dynamic or static---*

//Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time.