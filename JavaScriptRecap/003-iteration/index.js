'use strict';

// Iteration allows us to modify variables, add functionality over a set amount of times 

// For Loops
// Do While
// While
// For Each 
// Switch Case

// For loops operate the same as Java For Loops

for(let i = 0; i < 10; i++){
    console.log(i);
}

// For Each loops iterate through an array or some type of list

let colourList = ["Red", 122341, true];
console.log(colourList);
for(let colour of colourList){
    console.log(colour);
};


// While Loops
let counter = 3;
while(counter < 10) {
    console.log(`Counter is less than 10, current value is ${counter}`);
    counter++; // incrementing counter by 1
};

// Do While 
let newCounter = 20;
do{
    console.log("This will print once!");
    console.log(newCounter);
} while(newCounter < 5);

