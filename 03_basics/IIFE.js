// INTEREDIATE INVOKED FUNCTION EXPRESSION (IIFE)

// The use of iffe its run first of the page for use Ex. db Connection

//Remove global scope Polution for use IIFE

// =========================================This is Question =======================
(function chai() {
  // NAMED IIFE
  // console.log("DB CONNECTED")
})();

(function test() {
  // console.log("DB CONNECTED SUCCESSFULLY")
})();

//Execution Context

// Globl Execution context
// Function Execution context
// Eval Execution context
// Memory Phase = Memory Creation Phase

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(15, 25);
// console.log(result1);
// console.log(result2);

1;

// Global Execution Phase
//         |
//       this

2;

// Memory Phase (its assign Memory)
// val1 = undefined
// val2 = undefined
// addNum = undefined
// result1= undefined
// result2 = undefined

3.
// Execution Phase
// val1 = 10
// val2 = 5
// addNum------------> New Variable EnviroMent + Execution Thread
// result1 = 15
// result2 = 12


4.

// after result1 phase New Variable EnviroMent + Execution Thread are Delete and create new New Variable EnviroMent + Execution Thread