'use strict';

// Get my elements I need
let header = document.querySelector('h2');
console.log(header);

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
            // console.log(data);
            // console.log(data[1]);
            // console.log(data[1].name);                 // 5
            header.textContent = data[25].name;
            // Some kind of for loop to run the code - for each 
            for(let obj of data){
                console.log(obj);
                createCard(obj);
            }
            
        }).catch((error) => {
            console.error(`${error}`);                 // 6
        });
    });
// 1 - Starting with fetch, use the method and give it a target 
// 2 - Once the fetch request has gone through, take the response and do the following
// 3 - IF response status IS NOT 200, log out the error and return
// 4 - Take the fetch response and convert it to a readable and usable format using .json
// 5 - Converted our data to a usable format AND console logging it out
// 6 - Will print out the error if there are any



// Grab all of the elements I need
let parentDiv = document.querySelector('#parentDiv');

// Create a function to create my card
let createCard = (data) => {
    // Creating elements
    let newCard = document.createElement('div');
    let newCardBody = document.createElement('div');
    let newTitle = document.createElement('h5');
    let newText = document.createElement('p');
    let newHyperlink = document.createElement('a');

    // Modifying class lists
    newCard.classList = "card";
    newCardBody.classList = "card-body";
    newTitle.classList = "card-title";
    newText.classList = "card-text";
    newHyperlink.classList = "btn btn-primary";

    // Setting the element text content
    newTitle.textContent = data.name;
    newText.textContent = data.body;
    newHyperlink.textContent = data.email;

    // Append everything.. 
    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newText);
    newCardBody.appendChild(newHyperlink);

    newCard.appendChild(newCardBody);

    parentDiv.appendChild(newCard);
}