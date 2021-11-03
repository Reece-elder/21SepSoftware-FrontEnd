'use strict';

// Event Listeners - Ways we can tell Java to 'listen' for a certain 'event' on a web element
// - clicks, input, hover, keystroke, inactive

//* Create a button (in HTML)
//* Tell JS to find that button in the DOM
// Tell JS what we want it to do when the button is pressed

let button1 = document.querySelector("#firstButton");
let button2 = document.querySelector("#secondButton");
let button3 = document.querySelector("#thirdButton");

let header = document.querySelector('#randomNumber');
console.log(button1);

// addEventListener takes in:
// the event we're listening for ('click')
// what we want it to do ('function')
// Within JS EventListeners should always be AT THE BOTTOM OF THE PAGE

let buttonPressFunction = () => {
    console.log("Button clicked from JS!");
    header.textContent = `Random number is: ${Math.random() * 10}`;
};

let printName = (name) => {
    console.log(`Hey ${name}`);
}

// button1.addEventListener('click', (name) => {
//     printName();
// });

button1.addEventListener('click', buttonPressFunction);
button2.addEventListener('click', buttonPressFunction);
button3.addEventListener('click', buttonPressFunction);
