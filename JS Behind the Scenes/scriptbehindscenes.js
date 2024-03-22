"use strict";

/* SCOPING IN PRACTICE */
/* This calcAge = defined in global scope -> cause defined in top level 
of the code. calcAge creates own scope - equivilent to the variable environment of 
its execution context. */
const calcAge = (birthYear) => {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} are the ${age}, born in ${birthYear}`;
    console.log(output);

    /* block scope in printAge function */
    if (birthYear >= 1981 && birthYear <= 1996) {
      const string = `Oh, and you're a millenial, ${firstName}`;
      console.log(string);
    }
  }
  /* have to call printAge() inside calcAge cause printAge is a local function */
  printAge();
  return age;
};

/* Global variable */
const firstName = "Tristan";

calcAge(1991);
