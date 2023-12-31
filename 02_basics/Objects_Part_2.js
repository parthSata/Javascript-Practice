const Obj1 = { a: 1, b: 2 };
const Obj2 = { c: 3, d: 4 };

// Object assign is use for Merge Both Object  values  in One Object
// const Obj3 = Object.assign( Obj1, Obj2);
// const Obj3 = {...Obj1,...Obj2}; //its MErge using Spread Operator Both Output Are same
// console.log(Obj3)
// console.log(Obj1)

//ARRAY OF OBJECT

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: "Food",
    itemName: "Sushi",
  },
];

// console.log(transactions[0].category)  // Thius use To get Array of object value
// console.log(transactions[0])
// console.log(Object.keys(transactions[0]))
// console.log(Object.values(transactions[2]))
console.log(Object.entries(transactions[2]))
// console.log(transactions[0].hasOwnProperty("itemName"))

const {itemName : foodName}  = transactions[2] // <- Without Square Bracket how is sthis Posiible hOW TO GET FULL ARRAY OF OBJECT
// ===========================================  *THIS IS QUESTION

//THIS IS De-structuring

// console.log(foodName)

const item = Object.entries(transactions[2])
let obj1 = {}

for(let[key , value] of item){
  if(key== "itemName"){
    key  = "name" 
  }
  obj1[`${key}`] = value
  // console.log(key + " : " + value )
  console.log(obj1)
  console.log("object") 
}

