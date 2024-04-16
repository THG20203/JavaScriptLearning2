console.log(3 || "Jonas"); // result is 3.

/* result of OR operator doesn't always have to be a boolean 
Three properties about logical operators: 
1). Can use any data type
2). Can return any data type
3). Do something called short circuiting - short circuit evaluation.
*/

/* Short circuiting means that if first value is a truthy value, will 
immediately return that first value. Other values will not be 
evaluated by JavaScript - this is short circuiting. */

console.log("" || "Jonas"); // Jonas - "" not a truthy value
console.log(true || 0); // true
console.log(undefined || null); // null - undefined not a truthy value.

console.log(undefined || 0 || "" || "Hello" || 23 || null);
/* result of above will be Hello - cause preceding values will be falsy */

/* More practical application vs ternary operator */
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // still 10 because 0 is falsy value

/* The same as: */
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // still 10 because 0 is falsy value

/* AND operator - works opposite way to the OR operator */
console.log(0 && "Jonas"); // result of 0
/* so && short circuits at the first falsy value and returns it without
evaluating anymore. */
