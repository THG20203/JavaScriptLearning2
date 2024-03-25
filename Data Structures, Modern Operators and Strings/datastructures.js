/* destructuring - ES6 feature - unpacking values from array / object into seperate variables.
desctructuring breaks complex data structure down into a smaller structure (like a variable). */

"use strict";

/* destructuring arrays */
const restaurant = {
  name: "Classico Italiano",
  location: "Via angelo Tavanti 232, Firenze, Italy",
  categories: ["Italian", "Pizzaeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/* use destrcturing -> break down array -> store into varaibles in a very easy way. */

/* with destructuring, declare all three variables at the same time */
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4 - in number form - so destructured.
/* x y z is NOT an array. */

/* desctructuring sounds desctructive - but the original array is not affected */
/* we are not destroying the array, we are only descturing */
console.log(arr); // (3) [2, 3, 4]; - can see it is not affected.

// const [first, second] = restaurant.categories; // can see don't have to take all the elements out of the array.
// console.log(first, second); // Italian Pizzeria

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
// const [starter, mainCourse] = console.log(restaurant.order(2, 0));
// console.log of the desctructuring
// console.log(starter, mainCourse); // (2) ["Garlic Bread", "Pizza"]

/* destructuring from a nested array (one array inside of another) */
const nested = [2, 4, [5, 6]];
/* define two varialbes using destructuring assignment */
// const [i, , j] = nested;
// console.log(i, j); // (2) [5, 6]

/* what if we wanted to do individual values? - we'd have to do 
destructuring within destructuring */
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

/* can also set default values when destructing them - useful when don't know
the length of the array. Can happen in real world applications */
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 undefined ordinarily but with = 1, we've got 1 as a default

/* destructuring objects */
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // (4) ["Italian", "Pizzeria", "Vegetarian"]

/* variable names different from the property names */
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurant);

/* default values for property that doesn't exist on the object with = [] */
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

/* mutating variables whilst destructuring objects */
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
/* need to wrap this into parentheses cause {} the curly braces are 
interpreted by JavaScript is a code block when you start a line like this */
({ a, b } = obj);
console.log(a, b); // 23 7
