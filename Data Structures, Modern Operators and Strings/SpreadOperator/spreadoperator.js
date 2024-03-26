/* Spread operator - expand array into all its elements- so unpacking all the 
array elements at once */
const arr = [7, 8, 9];

/* want to create new array based on this array - but with some new 
elements at the beginning (How would we do that?) */
const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1, 2, 7, 8, 9]
