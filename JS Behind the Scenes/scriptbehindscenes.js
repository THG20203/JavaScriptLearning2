"use strict";

/* SCOPING IN PRACTICE */
/* This calcAge = defined in global scope -> cause defined in top level 
of the code. calcAge creates own scope - equivilent to the variable environment of 
its execution context. */
const calcAge = (birthYear) => {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} are the ${age}, born in ${birthYear}`;
    console.log(output);

    /* block scope in printAge function */
    if (birthYear >= 1981 && birthYear <= 1996) {
      const string = `Oh, and you're a millenial, ${firstName}`;
      console.log(string);
    }
  }
  /* have to call printAge() inside calcAge cause printAge is a local function */
  printAge();
  return age;
};

/* Global variable */
const firstName = "Tristan";

calcAge(1991);

/* HOISTING */
/* hoisting with variables */
console.log(me); // undefined - var values hoisted to undefined
console.log(job); // cannot access job before initialization
console.log(year); // cannot access year before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

/* hoisting with functions */
console.log(addDeclr(2, 3)); // get 5 -> can call function declaration before defined in code
console.log(addExpr(2, 3)); // cannot access addExpr before initialisation
console.log(arrow(2, 3)); // cannot access addExpr before initialisation

/* declaration */
function addDeclr(a, b) {
  return a + b;
}

/* expression */
const addExpr = function (a, b) {
  return a + b;
};

/* arrow */
const arrow = (a, b) => a + b;

/* pitfall of hoisting? */
/* delete shopping carts when number is 0, 0 is falsy value so can write: */
if (!numProducts) deleteShoppingCart;

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted"); // get all products deleted despite numProducts = 10
}

/* Why cause if (!numProducts) deleteShoppingCart; was before var numProducts = 10 */

/* declare variables at the top of each scope */
/* declare functions first and only use them after declaration */
var x = 1; // will create property on window object
let y = 2; // WON'T create property on window object
const z = 3; // WON'T create property on window object

/* proof? */
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

/* THIS KEYWORD */
