"use Strict"    

/*
    number = Range 2 to power 53
    bigInt 
    string = ""
    boolean = true or False
    null = Standalone value
    undefind = define but not declare any value
    symbol = its find for uniqueness

*/

let score = Number("33")

// console.log(typeof score)

// There are main Two type of Data types 

1. 

// Primitive = String , Number , Bolean  , undefined , null , Symbol , BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

    const bigInt = 3246512684n
    // console.log(typeof bigInt)

2.

//  Reference type(Non Primitive)  = object , array ,Functions 

const myObj = {
    id: 1,
    name:"Parth"
}

const myArr=['Parth','Brijesh','Thor']

function myFun(){
    // console.log("Hello Buddy")
}
myFun()


// ==============================================


// Stack : it's Used Primitive types beacause its change any time And this is give you copy of variable its not change original Value.


//  Heap :it's Use Non-primitive Type beacause its change original value not copy.
