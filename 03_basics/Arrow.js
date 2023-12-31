const user = {
  username: "Parth Sata",
  price: 150,
  welcomeMessage: function () {
    // console.log(`${this.username} , Hello Welcome To My Website`)
    // console.log(this)
  },
};
// user.welcomeMessage()
// user.username = "Thor Odinson"
// user.welcomeMessage()

//   console.log(this)

function chai(){
  // console.log(this)
}
chai()

const arrowExample = () => {
  const username  = "Parth"
  // console.log(this.username)
}
arrowExample()

const storeArrow = (num1) => {
  return num1 * 80;
};
// console.log(storeArrow(3000));

const implicitReturn = (num1) =>  num1 * 80  //Not Use of Paranthisis

console.log(implicitReturn(3000))