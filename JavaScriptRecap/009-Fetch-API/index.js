'use strict';

// HTTP Requests are ways of requesting info from a database in the form of request and response
// CRUD Application
// Create   - POST
// Read     - GET
// Update   - PUT
// Delete   - DELETE

// We are going to be using fetch to request and recieved response from a server

// Basic use case for a Get Request

fetch('https://jsonplaceholder.typicode.com/comments') // 1
    .then((response) => {                              // 2 
        if (response.status !== 200) {                 // 3 
            console.error(`status: ${response.status} `);
            return;
        }
        response.json()                                // 4
        .then((data) => {
            console.log(data);
            console.log(data[1]);
            console.log(data[1].body);                 // 5 
        }).catch((error) => {
            console.error(`${error}`);                 // 6
        });
    });
// 1 - Starting with fetch, use the method and give it a target 
// 2 - Once the fetch request has gone through, take the response and do the following
// 3 - IF resonse status IS NOT 200, log out the error and return
// 4 - Take the fetch response and convert it to a readable and usable format using .json
// 5 - Converted our data to a usable format AND console logging it out
// 6 - Will print out the error if there are any