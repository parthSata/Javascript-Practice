// function sayHello(){
//     console.log("Hello Bhaiyo")
// }
// sayHello()

// function addTwoNumbers(num1, num2) {
//   //   const result = num1 + num2
//   //   return result //After Return yOur Next code can't run

//   //   console.log("Parth")

//   return num1 + num2; // this is a Second way to Access
// }

// console.log(addTwoNumbers(23, 44));

//This is Default Value
// function loginMessage(userName = "Parth") {
//   //   if (!userName) {
//   //     console.log("Please enter a Name...")
//   //   } else {
//   return `${userName} Just Logged in...`;
//   //   }
// }
// console.log(loginMessage("Thor"));


function shopingCart(val1,val2,...num1){ //Rest Or Spread operator
    return num1
}

console.log(shopingCart(14,500,1000, 45,65))