// index.js - Lab 8 - Anon Functions
// Author: Ahmee Smith
// Date: October 31, 2024

// Variables
let numbers = [1, 5, 8, 89, 90];

//Functions
// add 100 to any number
function addHundred(n) {
    return n+100;
}

console.log(addHundred(4));

//let results = numbers.map(addHundred);
//console.log(results);

// anonymous function that subtracts 2 from x
let result = numbers.map(function(x) {
    return x - 2;
});

// Log the result
console.log("Results: ", result);
