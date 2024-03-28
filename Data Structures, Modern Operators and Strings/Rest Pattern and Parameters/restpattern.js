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

/* Console.log of above will produce arrays. Rest takes multiple numbers and then packs 
them all into one array. Opposite of spread operator. */

/* Rest pattern collects the elements that area unused in the destructuring assingment
but after the last element used, so the REST of the elements */

/* Rest pattern must be the last in the destrucutring assingment. Can only be 1 rest in any 
destructuring assignment */

// REST and functions
/* rest parameters */
const add = function (...numbers) {
  /* sum variable to be accumulating */
  let sum = 0;
  /* we can do i < numbers.length cause numbers is an array */
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

/* equivalent to sum = sum + numbers[i];. In this case, it adds the value of 
numbers[i] to the current value of sum and updates sum with the result. */

console.log(add(2, 3)); // 5
console.log(add(5, 3, 7, 2)); // 17
console.log(add(8, 11, 6, 5, 3, 7, 2)); // 42

const x = [25, 5, 7];
/* Add the three numbers above, how would we do that? */
/* Use the spread operator */
add(...x); // unpacking them to be packed in an array in add function above using rest.
