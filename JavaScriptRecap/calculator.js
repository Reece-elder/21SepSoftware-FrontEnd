'use strict';

let result;
let num1;
let num2;
let nameStr;

// function add(x,y){
//     return `${x} plus ${y} = ${x + y}`;
// };

let add = (x, y) => `${x} plus ${y} = ${x + y}`;

let sub = (x, y) => `${x} subtract ${y} = ${x - y}`;

let multiply = (x, y) => `${x} multiply ${y} = ${x * y}`;

let divide = (x,y) => `${x} divide ${y} = ${x / y}`;

console.log(typeof add);
console.log(add);

// function sub(x,y){
//     return `${x} subtract ${y} = ${x - y}`;
// };

// function multiply(x,y){
//     return `${x} multiply ${y} = ${x * y}`;
// };

// function divide(x,y){
//     return `${x} divide ${y} = ${x / y}`;
// };

// function oddOrEven(x){
//     if(x % 2 == 0){
//         return `${x} is even!`;
//     } else {
//         return `${x} is odd!`;
//     };
// };

let oddOrEven = x => {
    if(x % 2 == 0){
        return `${x} is even!`;
    } else {
        return `${x} is odd!`;
    };
}

// function runMethod(method){
//     console.log("************");
//     console.log(method);
// }

let runMethod = (method) => {
    console.log("*************");
    console.log(method);
};

// function startCalculator(){
//     console.log("Starting up Calculator now!");
// }

let startCalculator = () => {
    console.log("Starting up Calculator now!");
};

// function turnOffCalculator(name){
//     console.log(`Goodbye ${name}!`);
// }

let turnOffCalculator = (name) => {
    console.log(`Goodbye ${name}!`);
};

startCalculator();
num1 = 6;
num2 = 12;
nameStr = "Reece";


runMethod(add(num1,num2));
runMethod(sub(num1, num2));
runMethod(multiply(num1,num2));
runMethod(divide(num1, num2));

runMethod(oddOrEven(num1));

turnOffCalculator(nameStr);
