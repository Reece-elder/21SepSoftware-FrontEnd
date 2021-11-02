'use strict';

// alert("Hello World!");

let num = 1;
let bool = true;
let string = "2";

// Conditionals are used to check if something is true (num > 10)
// and do something with this information

console.log(bool == true); // is bool(true) == true
console.log(bool == false); // is bool(true) == false

console.log(bool == num); // Is the value of true(1) equal to the value of 1
console.log(bool === num); // is the value AND data type equal to the same

console.log("================================");
console.log(string == bool);

// Truthy + Falsey
// Within JavaScript every value is either Truthy or Falsey
// Generally truthy means - has some value, most values are truthy
// falsey -- (generally) has no value

// Falsey Values
let fBool = false;
let fNum = 0;
let fStr = "";
let fUndef = undefined;
let fNull = null;
let fNaN = NaN; 

console.log(typeof fNaN); // Not a Number IS a number ????

// Truthy Values
let truthy1 = '0';
let truthy2 = 'false';
let truthy3 = [];
let truthy4 = {};
let truthy5 = function(){};


console.log(`Should be true ${fNum == truthy1}`); // comes out as true
console.log(`Should be true ${fNum == truthy2}`); // comes out as false

let age = 26;

if(age > 40){
    console.log("You're old");
} else {
    console.log("You're under 40, no midlife crisis yet :)");
}

console.log("***********************************************");
// Ternary Statements ? 
// Ternary statements are used for one lining quick and simple if else statements
// (condition ? value1 : value2)
let ageString = (age > 20 ? "You might have a crisis soon.." : "No crisis for you :) ");
console.log(ageString);