'use strict';
console.log("New JS added!");

// Creating new DOM elements (<p> With some text </p> )
// Appending (adding to the bottom of) these elements to our web page

let parentDiv = document.querySelector('#parentDiv');
console.log(parentDiv);

// Creating a new <p> tag
let newPara = document.createElement('p');

// What is the text content of this p tag?
newPara.textContent = "Hey, this is from JS!";

// Append our newPara object to our div
parentDiv.appendChild(newPara);

// Create a new P tag WHEN a button is clicked
let newParaBtn = document.querySelector('#newParaBtn');
console.log(newParaBtn);

// Create a function which does the create element commands
let createNewPara = () => {
    let newPara = document.createElement('p');
    newPara.textContent = "This is a newwwwww paragraph";
    parentDiv.appendChild(newPara);
}

// Give our btn an event listener
newParaBtn.addEventListener('click', createNewPara);


