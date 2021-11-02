'use strict';

// Objects within JS
// Objects are collections of data, used for transferring info?
// JS Objects are not physical like they are in Java 

let zaph = {
    name: "Zaph",
    colour: "Ashy Black",
    fluffy: true,
    goodCatRating: 9,
    chonky: true
};

// Objects are PURELY just a data type

console.log(zaph);
console.log(zaph.colour);

// A getter for the object 
function getColour(){
    return zaph.colour
};

console.log(getColour);

zaph.colour = "Ashy Brown";
console.log(zaph);
zaph.legs = 4;
console.log(zaph);

// Arrays can store objects

let cattery = [
    {name: "Oliver", colour: "Cinnamon", fluffy: false, goodCatRating: 7, chonky: true},
    {name: "Hazel", colour: "Beige Fawn", fluffy: true, goodCatRating: 8, chonky: false},
    {name: "Oliver2", colour: "Cinnamon", fluffy: false, goodCatRating: 7, chonky: true},
    {name: "Hazel2", colour: "Beige Fawn", fluffy: true, goodCatRating: 8, chonky: false}
];

console.log(cattery); // Within Java would print wekfewfb727@cattery
// Print out the colour of our first cat

console.log(cattery[0].colour);

// JSON - JavaScript Object Notation - Data from other sources is configured and can be accessed through JS 
// Similar to JS Objects AND uses key value pairs

let zaphObj = {
    name: "Zaph",
    colour: "Ashy Black",
    fluffy: true,
    goodCatRating: 9,
    chonky: true
};

let zaphJSON = {
    "name" : "Zaph",
    "colour" : "Ashy Black",
    "fluffy" : true,
}

console.log("________________________________");
console.log(zaphJSON.colour);

// Through JS we can convert FROM JSON -> Object and Object -> JSON
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
let newZaphObj = JSON.parse('{"name" : "Zaph", "colour" : "Ashy Brown" }');
console.log(newZaphObj);
console.log(typeof newZaphObj);
console.log(zaphJSON);
console.log(typeof zaphJSON);

// Convert JS objects -> JSON

let newJSON = JSON.stringify(zaphObj);
console.log(zaphObj);
console.log(newJSON);