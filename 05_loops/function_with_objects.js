// const myObj ={
//     id:1,
//     name: "Parth"
// }

// let val1
// val1 = 10

// function one(obj){

//     let result = obj.id
//     console.log(result)

//      val1 = 20
// }
// one(myObj)
// // console.log(result)

// console.log(val1)

// console.log( one(5,7))
// function one(num1,num2){
//     return num1 + num2
// }

// const two = function(num3,num4){
//     return num3 + num4
// }
// console.log(two(4,9))

// (function anyFun(num1,num2){

// })()

const myObj = {
  id: 1,
  name: "Parth",
  surename: () => {
    // console.log(this.name)
    return {
      Firstname: "Sata",
    };
  },
};

// let ,var ,const
//arrowfunction

//var  Example

// function arrow(){
//  if (true) {
//   var x = 10
//  }
//  console.log(x); // 10
// }
// arrow()

// let Example

// function arrow(){
//  if (true) {
//   let x = 10
//  }
//  console.log(x);
// }
// arrow()

// const Example

// function arrow(){
//   if (true) {
//    const x = 10
//   }
//   console.log(x); // ReferenceError: x is not defined
// }
// arrow()

// const one = (num1, num2) => num1 + num2

// console.log(one(2,8))

// function one(){
//   if(true){
//     var a = 10
//   }
//   console.log(a)
// }

// one()

// function one(){
//   if(true){
//     let a = 10
//   }
//   console.log(a)
// }

// one()

// function one(){
//   if(true){
//     const a = 10
//   }
//   console.log(a)
// }
// one()

function myFun(item, index) {
  console.log(arguments);
}

new myFun(1, 2);

const funCreate = (item , index) => {
  // console.log("Result :" ,arguments);
  
};

funCreate(1,2);

