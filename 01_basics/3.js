/*

// length Function
let str = "Hello Parth";
console.log(str.length);

// IndexOf Function
let a = "Hello Parth";
console.log(a.indexOf("Parth"));

// lastIndexOf Function
let b = "Hello Parth";
console.log(a.lastIndexOf("r"));

// slice Function
let c = "Hello Parth";
console.log(a.slice(4, 9));

// substring Function
let d = "Hello Parth";
console.log(a.substring(3, 7));

// replace Function
const e = "Hello, Parth!";
console.log(str.replace("Parth", "Sata"));

// split Function
const f = "apple,orange,banana";
console.log(f.split(","));

// trim Function
const g = "    Hello ,!Parth";
console.log(g.trim(","));

// toLowerCase Function
const h = "Hello ,!Parth";
console.log(g.toLowerCase());

// toUpperCase Function
const i = "Hello ,!Parth";
console.log(i.toUpperCase());

// includes Function
const j = "Hello ,!Parth";
console.log(j.includes("Parth"));

//Array Functions 
const arr = [1, 2, 3, 4];
const arr1 = ["PArth", "Brijesh"];
arr.push(5);
arr.pop();
arr.shift(0);
arr.unshift(0);
console.log(arr);

let combined = arr.concat(arr1);
console.log(combined);
arr.forEach((element) => {
  console.log(element);
});

let squared = arr.map((element) => element * 2);
console.log(squared);

let filtered = arr.filter((element) => element % 2);
console.log(filtered);

let find = arr.find((element) => element % 2 === 0);
console.log(find);

let arr2 = [5,9,4,6,1,3,7,6,5]
arr2.sort()
console.log(arr2)

//Find

const numbers = [10, 432, 243, 234];

const found = numbers.find(function(number) {
    return number > 200;
});

console.log(found); 


//Some Function

let string1 = [ 1 , 2 , 3 , 4]

let hasNumber = string1.some((number) => {
    return number % 2 == 0
})
 
console.log(hasNumber)


string1.forEach(function(number, index) {
  console.log(`Element at index ${index}: ${number}`);
});
*/


const dataAboutProducts = 
[
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]

const Catagory = []

dataAboutProducts.filter((category) => {
  

})