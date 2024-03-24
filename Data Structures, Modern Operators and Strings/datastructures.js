"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via angelo Tavanti 232, Firenze, Italy",
  categories: ["Italian", "Pizzaeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    /* return the content of the arrays based on given indexs */
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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

[main, secondary] = [secondary, main]; // main, secondary equals the destructuring of this array
/* we are not using let or const above, cause we are simply reassigning values of two variables */

/* with descturing, don't need temporary variable in the middle */

/* Another trick with desctructuring - function returning an array. Then can immediately 
destruct the result into different variables - allows us to return multiple values from
a function. */

/* Garlic bread (3rd / '2' choice in array of starterMenu, Pizza 1st / '0' of mainMenu */
const [starter, mainCourse] = console.log(restaurant.order(2, 0)); // (2) ["Garlic Bread", "Pizza"]
// console.log of the desctructuring
console.log(starter, mainCourse);
