// while (true) {
//     console.log("object is already")
//     break;
// }


const object = [1, 2, 3, 4, 5];
for (const iterator of object) {
    console.log(iterator)
}

const result = "Hello, world!"
for (const iterator of result) {
    // console.log(iterator)
}

const map = new Map()

map.set("Id",1)
map.set("Name","Parth")
map.set("Surename","Sata")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key , "=" , value)
}

const myObj = {
    id: 1,
    name: "Parth",
    surename: "Sata"
}

//  for (const {key,value} of myObj) {
//     // console.log(key ,value)
//  }
// myObj are Not iterable

for (const key in myObj) {
        // console.log(`My Key Is ${key} , my Value Is ${myObj[key]}`)
}

const myArr = ["spiderMan","IronMan","Captain America","Thor","Hulk"]

for (const key in myArr) {
//    console.log(myArr[key])
}

myArr.forEach((item)=>{
    // console.log(item + " Parth ")
})

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

  transactions.forEach((item) =>{  // forEachloop can't Return any value
      console.log(item)
  })