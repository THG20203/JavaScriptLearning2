/* creating two new restaurant objects */
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

rest1.numGuests = rest1.numGuests || 10;
// 20 - numGuests for rest2 must be true, otherwise 10 returned
console.log(rest1); // {name: "Capri", numGuests: 20}

rest2.numGuests = rest2.numGuests || 10;
console.log(rest2); // {name: "La Piazaa", owner: "Giovanni Rossi", numGuests: 10}
