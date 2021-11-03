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

// To GRAB all elements of a DOM rather than the first use querySelectorAll
let listItemList = document.querySelectorAll('li');
console.log(listItemList);

listItemList[1].style.border = '5px solid red';

// How can I give all of the items in my list a purple border??
// A foreach loop for my list of elements, give them all a purple border
// for(let li of listItemList){
//     li.style.border = '5px solid purple';
// };