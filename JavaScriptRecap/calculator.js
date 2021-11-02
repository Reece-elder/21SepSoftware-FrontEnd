'use strict';

let result;
let num1;
let num2;
let nameStr;

function add(x,y){
    return `x + y = ${x + y}`;
};

function sub(x,y){
    
};

function multiply(x,y){
    
};

function divide(x,y){
    
};

function oddOrEven(x){
    if(x % 2 == 0){
        return `${x} is even!`;
    } else {
        return `${x} is odd!`;
    };
};

function runMethod(method){
    console.log("************");
    console.log(method);
}

function startCalculator(){
    console.log("Starting up Calculator now!");
}

function turnOffCalculator(name){
    console.log(`Goodbye ${name}!`);
}

startCalculator();
num1 = 5;
num2 = 12;
nameStr = "Reece";


runMethod(add(num1,num2));
runMethod(sub(num1, num2));
runMethod(multiply(num1,num2));
runMethod(divide(num1, num2));

runMethod(oddOrEven(num1));

turnOffCalculator(nameStr);
