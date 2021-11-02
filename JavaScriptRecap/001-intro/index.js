'use strict';

console.log("Hey this is running!");

// - Create global variables out of nothing
// - Stops ASI (automatic Semicolin Insertion)
// - Stops you from having certain variable names

// Create some variables (what are the three )
let variablesThatCanChange;
const variableThatCannotChange = "final value";
var automaticGlobalVariableNEVEREVERUSEIT;

// Creating a user profile ServiceWorker
let age; // Can change
const userID = 123; // Cant change

// What data types can we use?? 
// Dont have to declare the data type!
// JS Works out the data type BASED on the content at run time

let stringExample = "hello everyone";
let intExample = 123;
let bigNum = 8736408379308397389373n; // Big numbers / bigInt end with an n 
let boolean = true;
let undefinedExample = undefined;
let undefinedTwo;
let object = {name:"Reece", favColour: "Purple" };
let float = 12.23;
let arrayExample = ["Pepperoni", "Hawiaan", "Four Seasons"];

console.log(typeof bigNum);
