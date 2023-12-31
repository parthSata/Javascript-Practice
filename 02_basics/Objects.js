const mySym = Symbol("myKey1"); //its use for unique value
// Object.create()
// const myArr=['Parth','Brijesh','Thor']
// function myFun(){
//     // console.log("Hello Buddy")
// }
// myFun()
// console.log(myObj.name);
// console.log(myObj["name"]);//this is seci=ond type to access object
// console.log( myObj[mySym]) //this type to define symbol in objects   {id: 1, name: 'Thor', Symbol(myKey1): 'myKey1'}
const myObj = { // non singeTon object
  id: 1,
  name: "Parth",
  [mySym]: "myKey1",
  email:"Thor@Odinson.com"
};

const myobj1 = new Object() // This is SingleTon object 
myObj.name = "Thor";
// console.log(myObj.email);
// Object.freeze(myObj)
// myObj.email = "Loki@Google.com"

//myObj.greetings its use like variable

myObj.greetings = function(indexOf){
    console.log(`Hello Js User,${this.name}`)
}
console.log(myObj.greetings())
