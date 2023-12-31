// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   add(num3) {
//     return (this.result += num3);
//   }
//   subtract(num3) {
//     return (this.result -= num3);
//   }
//   multiply(num3) {
//     return (this.result *= num3);
//   }
//   divide(num3) {
//     if(num3 == 0 || this.result == 0){
//         throw new Error("Can't Divide By Zero")
//     }
//     return (this.result /= num3);
//   }
//   clear() {
//     return (this.result = 0);
//   }
//   getResult() {
//     return this.result;
//   }
//   calculate(num3) {
//     num3 = num3.replace(/\s/g, "");
//     return (this.result = eval(num3));
//   }
// }

//   const finalResult = new Calculator();
//   console.log(finalResult.add(14));
//   console.log(finalResult.multiply(14));
//   console.log(finalResult.divide(0));
  


// //try catch use for error
// //remove space

/*
  Implement a class Todo having below methods
- add(todo): adds todo to list of todos
- remove(indexOfTodo): remove todo from list of todos
- update(index, updatedTodo): update todo at given index
- getAll: returns all todos
- get(indexOfTodo): returns todo at given index
- clear: deletes all todos
*/

// class todo {
//   constructor() {
//     this.todoInformation = [];
//   }

//   add(todo) {
//      this.todoInformation.push(todo);

//   }
//   remove(index) {
//     this.todoInformation.splice(index,1)
//   }
//   update(index, updatedTodo) {
//     if(index >= 0 && this.todoInformation.length >=0)
//     {
//       this.todoInformation[index] = updatedTodo
//     }
//     else{
//       throw console.error("Apka Todo YAha NAhi Hai");
//     }
//   }
//   getAll() {
//     return [...this.todoInformation]
//   }
//   get(indexOfTodo) {
//       if (indexOfTodo >= 0 && indexOfTodo < this.todoInformation.length) {
//         return this.todoInformation[indexOfTodo];
//       }
//       else{
//         throw console.error("Index Sachi Nathi")
//       }
//   }
//   clear(){
//     this.todoInformation = []
//   }
// }
// const User = new todo();

// User.add("Hello I am Parth");
// User.add("Hello I am Brijesh");
// User.add("Hello I am Preet");

// console.log(User.getAll())
// console.log(User.remove(1))
// console.log(User.update(1,"I am Parth Sata"))
// const invalidTodo = User.get(1);
// console.log(invalidTodo);

// Result = User.todoInformation;
// console.log(Result)


const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: 'Food',
    itemName: 'Sushi',
  },
];

const Obj = {
  id:1,
  name:"Parth",
  RollNo:38
}

Obj.RollNo = 40


function updateObject(arr){
    arr.map(() =>{

    })
}