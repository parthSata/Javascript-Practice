// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// falsey value

// false ,  0 , -0, BigInt 0n, "",null,undefined , NaN

//Truthy Values

// true , "0",'false', " ", [],{},function(){}
const isLoggedIn = [];

if (isLoggedIn) {
//   console.log("Executed");
}

// Nullish colescing operator (??)  : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? "Parth"
val1 = undefined ?? 10;

// console.log(val1);

// ternery Operator

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("I want to Buy") : console.log("Bahut Paisa he");
