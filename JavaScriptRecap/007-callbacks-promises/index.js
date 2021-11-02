'use strict';

// Promises and Callbacks
// Promises are used for when some data WILL EVENTUALLY be available. 
// JavaScript is an event driven language, it follows a single function path, and completes it when it is finished
// JavaScript can do multiple things at the same time, if we use a promise to say "some data will get here eventually"
// We can do other stuff while its waiting

// Promises come in 3 states:
// Resolved - Finished and is succesful 
// Pending - Waiting for data??
// Rejected/ Failed - Incorrect or no data


// Creating a promise called promise, it takes in two paramaters (resolve and reject)
// What we're doing with those paramaters comes after the arrow
let promise = new Promise((resolve, reject) => {

    let string = "something else";

    if(string === "pass"){
        // What happens if the promise is succesful
        // if succesful run the resolve function and pass in "Succesful! :)"s
        resolve("Succesful! :) ") ;
    } else {
        // What happens in the reject outcome
        reject("Task Failed :(");
    }
});

// .then() - if function has finished, what should happen next 
// .catch() - if failed or rejected what should happen next

// .then( our arrow function )
promise.then((message) => {
    console.log(`Running after the method, the message is ${message}`);
}).catch((message) => {
    console.log(`This is in the catch block, it has failed with error ${message}`);
}).then(() => {
    console.log("This is the end of the promise, and will always run!");
})

