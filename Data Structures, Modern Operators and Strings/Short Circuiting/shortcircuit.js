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
