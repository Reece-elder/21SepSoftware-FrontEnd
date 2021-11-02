'use strict';

// Functions, what are they? 
// Functions are the scripting equivalent of methods,
// Functions do a block of code and can take in parameters

function add(x,y){
    return x + y;
};

console.log(add(5,7));

// Within JS we use Function Expressions
// Stored as variables, meaning they can exist locally, and used whenever needed

const subFunc = function(x, y){
    return x - y;
};

console.log(subFunc(10,7));

let newString = `The sum 10 - 7 = ${subFunc(10, 7)}`;
console.log(newString);

// Arrow Functions - Are shorthand methods of writing functions, to improve legibility 
// Arrow functions are used EVERYWHERE so if you want to understand JS solutions / libraries, you need to know arrow functions

function standardHelloWorld(name){
    return `Hello ${name}`;
};

// Turning the functon into a function expression
let functionExpression = function(name){
    return `Hello ${name}`;
};

// Remove the word function and use an arrow instead
// Removing the word function AND putting arrow after the bracket
let functionArrow = (name) => {
    return `Hello ${name}`;
}

// If your arrow function ONLY returns one line, remove the brackets and put the return directly after the arrow
let functionArrowOneLine = (name) => `Hello ${name}`;

// If only passing in one parameter you can ignore the brackets
let arrowFunctionShorter = name => `Hello ${name}`;

// If no parameters you must put in the bracket
let arrowFunctionSuperShort = () => `Hello everyone!`;

console.log(standardHelloWorld("Sam"));
console.log(functionExpression("Sam"));
console.log(functionArrow("Sam"));
console.log(functionArrowOneLine("Sam"));
console.log(arrowFunctionShorter("Sam"));
console.log(arrowFunctionSuperShort());