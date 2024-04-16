/* creating two new restaurant objects */
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// 20 - numGuests for rest2 must be true, otherwise 10 returned
// console.log(rest1); // {name: "Capri", numGuests: 20}

// rest2.numGuests = rest2.numGuests || 10;
// 10 because of short circuiting, rest2 numGuests undefined so 10 returned
// console.log(rest2); // {name: "La Piazaa", owner: "Giovanni Rossi", numGuests: 10}

// OR operator - write same thing in more concise way.
/* Or assigns value to a variable if that value is falsy */

rest1.numGuests ||= 10; // 20 - cause 20 was already there
rest2.numGuests ||= 10; // 10 cause there was nothing there - rest2.numGuests was falsy value

/* If numGuests in rest1 changed to 0? - use nullish logical assingment */
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

/* Logical && assingment operator */
// rest2.owner = rest2.owner && "<ANONYMOUS>";
/* rest2.owner is truthy, therefore second value will be avaluated and returned */

/* previously const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
}; and now it looks like:

const rest2 = {
  name: "La Piazza",
  owner: "<ANONYMOUS>",
}; */

/* assigning value to variable already defined */
rest1.owner &&= "<ANONYMOUS>"; // falsy so not replaced
rest2.owner &&= "<ANONYMOUS>"; // truthy so replaced with anonymous
