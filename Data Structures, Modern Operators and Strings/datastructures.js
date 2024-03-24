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

// const [first, second] = restaurant.categories; // can see don't have to take all the elements out of the array.
console.log(first, second); // Italian Pizzeria

/* taking first category and the third? Leave a gap in destructuring operator */
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

/* use destructuring to do a lot of things. i.e. owner decided to switch main and secondary category */

/* WITHOUT destructuring would have to create a temporary variable, assign one of them - i.e. main,
then main to secondary, then secondary to temp */
/* I couldn't do main = secondary, then secondary = main, cause by then, 
would've overwritten main variable. Need temp variable in middle */
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian

/* with destructuring much easier - can create array with both of them */

[secondary, main];
