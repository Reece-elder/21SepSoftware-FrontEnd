'use strict';

let nameValue = "Reece";
let greeting = "Hello Everyone!";

// String concatenation is adding strings together to make a larger string 
let newGreeting = nameValue + greeting;
console.log(newGreeting);

// Concatenate Strings AND non strings
let sumString = "10 + 5 = ";
let sum = 10 + 5;

let finalString = sumString + sum;
console.log(finalString);

// Template Literals - Create a new string with variables plugged in without needing to add spaces
let newName = "Kieran";
let pizzaFlavour = "Meat Feast";
let favouriteColour = "Purple";

let templateLiteral = `My name is ${newName}, my fav pizza is ${pizzaFlavour} and my fav colour is ${favouriteColour}`;

console.log(templateLiteral);