"use strict";

/* SCOPING IN PRACTICE */
/* This calcAge = defined in global scope -> cause defined in top level 
of the code. calcAge creates own scope - equivilent to the variable environment of 
its execution context. */
const calcAge = (birthYear) => {
  const age = currentYear - birthYear;
  /* within calcAge logging calcAge to the console */
  console.log(firstName);
  return age;
};

/* Globa variable */
const firstName = "Tristan";

calcAge(1991);
