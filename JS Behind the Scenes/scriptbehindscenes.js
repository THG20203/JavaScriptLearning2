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

/* Arguments */
/* arguments keyword */
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5); // this will produce an array in the console - 2 and 5 - the two arguments
addExpr2(2, 5, 3, 12); // can add to arguments array legally - can use them in functions

/* but you can't do this for arrow functions */
var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow2(2, 5, 4, 3); // gives you an error - arguments is not defined

/* PRIMITIVES Vs. OBJECTS (PRIMITIVE VS. REFERENCE TYPES) */
/* primitives - simple; numbers, strings, booleans etc */
let age = 30;
/* preserving oldAge in variable below  - at that point age was still 30 */
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

/* another scenario - object with name tristan, age 30 */
const me = {
  name: "Tristan",
  age: 27,
};

const friend = me;
/* Originally name and age are the same, but lets say we have different ages */
friend.age = 27; // changing friend.age but clearly not me.age
console.log("Friend:", friend);
console.log("Me:", me);

/* What will console.log above show? Both me and friend have age 27 */
// Friend {name: "Tristan", age: 27}
// Me {name: "Tristan", age: 27}

/* But I only changed the age of friend NOT me? */

/* First remember primitive data types of JavaScript:
Number
String
Boolean
Undefined
Null
Symbol
BigInt
Everything else - Objects:
Object literal
Array
Functions Many More..*/

/* Primitive = Primitive Types */
/* Objects = Reference Type */

/* PRIMITIVES VS OBJECTS IN PRACTICE */
let lastName = "Williams"; // initial value of last name
let oldLastName = lastName; // remember the 'old last name' before it changes
lastName = "Davies"; // Williams gets married, changes last name to davies
console.log(lastName); // Davies
console.log(oldLastName); // Williams

/* Do the same thing with a reference value - which will be stored in the heap */
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davies"; // this will not give us the result we expect
console.log("Before marriage:", jessica); // Davies
console.log("After marriage:", marriedJessica); // Davies

/* we can't assign a completely different object to married jessica */
/* we can't change it in the stack to a new memory address */
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  /* adding an array in original object - cause array is just an object */
  family: ["Alice", "Bob"],
};

/* use Object.assign to merge two objects */
/* create new object where all the properties */
/* create completely new object where all the properties are really copied,
so store this new object in a const called jessica copy */
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davies";
console.log("Before marriage:", jessica2); // "Williams"
console.log("After marriage:", marriedJessica); // "Davies"

/* With object.assign and copying the function we can preserve the last name Williams.
after we changed lastName on jessicaCopy. */

/* HOWEVER, Object.assign only works on the first level - object.assign only creates a shallow 
copy - we want a deep clone. */

/* I added family array that is in both objects however, below will change the array
in jessicaCopy */
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
/* Manipulating an object (family array) in a copied object (jessicaCopy). */

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
/* Both objects have a family with four members - family object deeply nested object so
behind the scenes object.assign did not copy it to the new object. */
