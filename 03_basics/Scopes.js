function one() {
  const username = "Parth";

  function two() {
    const website = "Google.com";
    // console.log(username)
  }
  // console.log(website) // it's not Access

  two();
}
one();

//Scope using if Condition

if (true) {
  const userName = "Parth";
  if (userName === "Parth") {
    const website = "@Google.com";
    // console.log(userName + website);
  }
  // console.log(website)
}
// console.log(userName)

// console.log(addOne(6));
function addOne(num1) {
  return num1 + 1;
}


// console.log(addTwo(5)); //you are can't use of this type beacause you are hold function in variable
//it's Call the Expresion or anonymous function
const addTwo = function (num1) {
  return num1 + 2;
};
