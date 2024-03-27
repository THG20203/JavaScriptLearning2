/* Rest Pattern, collect multiple elements -> condense them into an array */

/* Spread is to unpack an array, rest is to pack up an array */

/* SPREAD, because on right side of = */
const arr = [1, 2, ...[3, 4]];
console.log(arr); // (4) [1, 2, 3, 4]

/* REST, because on left side of = */
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

/* Above whats happening? First and second elements become first and second variables.
then ...others */
/* ...others is the rest pattern, because will take the rest of the elements (remaining
elements of the array) and put them into a new array (in this case we call them others). */
