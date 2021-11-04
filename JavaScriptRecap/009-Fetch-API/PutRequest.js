"use strict";

let inputField = document.querySelector("#inputField");
let inputBtn = document.querySelector("#inputBtn");

// A function that saves the value of the input field
let postData = () => {
  let inputValue = inputField.value; // Make a new variable called inputValue, equal to value of input field

  let newObject = {
    title: inputValue,
    body: "zip zooop zeeeeep",
    userId: 30,
  };

  // Run fetch function
  postFetch(newObject);
};

// POST request - Creating data and pushing it into a database
// POST request we also need to pass in a BODY of data
// Data we get back will likely be using the data we sent

// This is the object we are creating to post to the backend

let postFetch = (object) => {
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST", // We are specifying we are POSTing data
    headers: {
      "Content-type": "application/JSON", // Telling the server we are sending JSON
    },
    body: JSON.stringify(object), // We will be creating an object and passing it in here
  }).then((response) => {
    if (response.status !== 201) {
      console.error(`Status: ${response.status}`);
      return;
    }
    response.json().then((data) => {
      console.log(data);
    });
  });
};

// Event Listener ALWAYS GO AT BOTTOM

inputBtn.addEventListener('click', postData);
