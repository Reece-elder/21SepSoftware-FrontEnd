'use strict';

// Grab all of the elements I need
let parentDiv = document.querySelector('#parentDiv');
let newBtn = document.querySelector('#newParaBtn');
let newCardExample = document.querySelector('.card');

console.log(newCardExample);

// Create a function to create my card
let createCard = () => {
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
    newTitle.textContent = "new title";
    newText.textContent = "new text";
    // newHyperlink.textContent = "Go somewhere";

    newHyperlink.innerHTML = 'href="#" class="btn btn-primary"'

    // Append everything.. 
    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newText);
    newCardBody.appendChild(newHyperlink);

    newCard.appendChild(newCardBody);

    parentDiv.appendChild(newCard);
}

// Tell our button to run this function when its clicked
newBtn.addEventListener('click', createCard);