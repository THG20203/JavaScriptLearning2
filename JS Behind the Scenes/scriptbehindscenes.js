"use strict";

/* SCOPING IN PRACTICE */
/* This calcAge = defined in global scope -> cause defined in top level 
of the code. calcAge creates own scope - equivilent to the variable environment of 
its execution context. */
const calcAge = (birthYear) => {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} are the ${age}, born in ${birthYear}`;
    // console.log(output);

    /* block scope in printAge function */
    if (birthYear >= 1981 && birthYear <= 1996) {
      const string = `Oh, and you're a millenial, ${firstName}`;
      //  console.log(string);
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
//console.log(me); // undefined - var values hoisted to undefined
//console.log(job); // cannot access job before initialization
//console.log(year); // cannot access year before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

/* hoisting with functions */
//console.log(addDeclr(2, 3)); // get 5 -> can call function declaration before defined in code
//console.log(addExpr(2, 3)); // cannot access addExpr before initialisation
//console.log(arrow(2, 3)); // cannot access addExpr before initialisation

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
  //  console.log("All products deleted"); // get all products deleted despite numProducts = 10
}

/* Why cause if (!numProducts) deleteShoppingCart; was before var numProducts = 10 */

/* declare variables at the top of each scope */
/* declare functions first and only use them after declaration */
var x = 1; // will create property on window object
let y = 2; // WON'T create property on window object
const z = 3; // WON'T create property on window object

/* proof? */
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

/* THIS KEYWORD */
console.log(this); // undefined cause in strict mode

/* regular function */
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1991); // regular function call  - cause the function call doesn't have an owner

/* arrow function - uses this keyword of parent scope - so its window for arrow - 
cause thats the this keyword in the global scope. */
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

/* trying to use this keyword inside of a method? - function attached to jonas object */
/* the method will provide the jonas object! */
const jonas = {
  year: 1991,
  calcAge3: function () {
    console.log(this);
  },
};
jonas.calcAge3();

const matilda = {
  year: 2017,
};

/* copying calcAge method from jonas to matilda -> called method borrowing */
matilda.calcAge3 = jonas.calcAge3;
matilda.calcAge3(); // will give us correct result. this keyword in jonas points to matilda object
/* proves that this keyword always points to the object that is calling the method.
But this doesn't work for functions - only for objects. */

/* REGULAR vs ARROW FUNCTIONS */
const tristan = {
  firstName: "Tristan",
  year: 1997,
  calcAge4: function () {
    console.log(2037 - this.year);
    /* function in a method */
    /* PRE ES6 */
    /* self = this is solution to the issue - its defined as this keyword for isMillenial method. */
    /* const self = this; // self or that - pre ES6
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); /* this keyword is undefined in isMillenial when CalcAge4 is called 
    cuase isMillenial is just a NORMAL function call even though it happens inside a method */

    /* ES6 solution -> an arrow function. Why? Cause arrow function doesn't have its own this 
    keyword - will use this keyword of parent scope */
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

tristan.greet();
/* Hey undefined -> reason is arrow function, arrow functions don't get their 
own this keyword. greet is an arrow function */
tristan.calcAge4();
/* scriptbehindscenes.js:128 Uncaught TypeError: Cannot read properties of undefined (reading 'year')
    at isMillenial (scriptbehindscenes.js:128:24)
    at Object.calcAge4 (scriptbehindscenes.js:130:5)
    at scriptbehindscenes.js:141:9 */
