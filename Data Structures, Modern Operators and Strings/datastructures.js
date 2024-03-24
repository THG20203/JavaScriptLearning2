"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via angelo Tavanti 232, Firenze, Italy",
  categories: ["Italian", "PIzzaeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

/* destrcuturing - ES6 feature - unpacking values from array / object into seperate varialbes.
desctructuring breaks complex data structure down into a smaller structure (like a variable). */

/* use destrcturing -> break down array -> store into varaibles in a very easy way. */
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

/* with destructuring, declare all three variables at the same time */
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4 - in number form - so destructured.
/* x y z is NOT an array. */

/* desctructuring sounds desctructive - but the original array is not affected */
/* we are not destroying the array, we are only descturing */
console.log(arr); // (3) [2, 3, 4]; - can see it is not affected.
