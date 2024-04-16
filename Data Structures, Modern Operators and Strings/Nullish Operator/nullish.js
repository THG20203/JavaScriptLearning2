restaurant = [(chelsea = "chelsea")];

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0 - only nullish value will short circuit with ??
