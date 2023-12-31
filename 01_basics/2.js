const users = [
  {
    id: 1,
    name: 'Parth',
    isActive: true,
    age: 10,
  },
  {
    id: 2,
    name: 'Brijesh',
    isActive: false,

    age: 5,
  },
  {
    id: 3,
    name: 'Harsh',
    isActive: true,
    age: 32,
  },
  {
    id: 4,
    name: 'Smit',
    isActive: false,
    age: 15,
  },
];


// PART-2
// The Name is Exsist or not
// Solution 1

// const isExsist = (name,user) => {
//   let Exsist = false
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       Exsist=true
//     }
//   }
//   return Exsist
// };
// isExsist()

// Solution  2 With Find()


// const isExsist = (name,users) => {
//   const user = users.find((user) => user.name === name);
//   return user;
// }

// Solution 3 With findIndex()

// const findIndex = (users,name) => {
//   const index = users.findIndex((user) => user.name === name)
//   return index
// }

// Solution 4 With some()

// const findIndex = (users,name) => {
//   const index = users.some((user) => user.name === name)
//   return index
// }


// const arr = [1, 2, 3]

// const append = (arr,ele) => {
//   return [...arr,ele]
//   // arr.push(ele)
//   // return arr
// }
// append(arr,4)

//Remove Duplicate Array
// Solution 1
// const arr = [1, 9, 2, 2, 4, 4, 5, 6, 3, 3]

// const rmvdup=()=>{
//   const uniqueElements = []

//   arr.forEach((ele) => {
//     if (!uniqueElements.includes) {
//       uniqueElements.push(ele)
//     }
//   })
//   return uniqueElements
// }
// rmvdup(arr)


//Solution 2 With Set()
// const arr = [1, 9, 2, 2, 4, 4, 5, 6, 3, 3]
// function uniqueKey(arr){
//       return [...new Set(arr)]
// }
// console.log(uniqueKey(arr))

// //concat()
// // Solution 1


// function merge() {
//   arr1.concat(...arr2)
//   return arr1
// }
// const arr1 = [1, 2];
// const arr2 = [3];
// const result=merge( arr1, arr2);
// console.log(result,arr1,arr2)


// Part -1

// Solution 1
// const names = [];
// for (i = 0; i < users.length; i++) {
//   if (users[i].age >= 18) {
//     names.push(users[i].name);
//   }
// }
// console.log(names);

// // Solution 2
// users.forEach((user) => {
//   if (user.age <= 18) {
//     names.push(user.name);
//   }
// });
// console.log(names);

// // Solution -3
//SORT()

// // Map function given a new Array

const names1 = users
  .filter((user) => user.age > 15)
  .sort((user, user1) => (user.age > user1.age ? 1 : -1))
  .map((user) => user.name);
console.log("names1" , names1);


// users.sort((user, user1) => user.age > user1.age ? 1 : -1)
// console.log("Sort",users);
