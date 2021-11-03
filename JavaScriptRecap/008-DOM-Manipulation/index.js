'use strict';

// If I want to modify the H2 the first thing I need to do is locate the H2 in the DOM

// Document Selector Methods
// QuerySelector()
// query selector works like CSS, so # - id, . - class, h1 - element
let header1 = document.querySelector('#firstHeader');
console.log(header1);
console.log(typeof header1);

header1.textContent = "This is new text.. wild";

header1.style.color = 'red';