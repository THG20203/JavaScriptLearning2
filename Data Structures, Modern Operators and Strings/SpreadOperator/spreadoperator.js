/* Spread operator - expand array into all its elements- so unpacking all the 
array elements at once */
const arr = [7, 8, 9];
const arr2 = [10, 11, 12];

/* want to create new array based on this array - but with some new 
elements at the beginning (How would we do that?) */
const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1, 2, 7, 8, 9]

/* Spread operator vs desctructuring - spread operator doesn't create 
new variables */

/* Uses of spread operators */
///1. Shallow copies of arrays
const arrCopy = [...arr]; // here created a shallow copy of the array

///2. Merge two arrays together
const merge = [...arr, ...arr2];
console.log(merge); // (7, 8, 9, 10, 11, 12)

/* Iterables: arrays, strings, maps, sets. NOT OBJECTS */
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters); // (7) ["J", "o", "n", "a", "s", " ", "S."]
