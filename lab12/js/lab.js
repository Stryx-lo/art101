// index.js - Lab 12 - Conditionals
// Author: Ahmee Smith
// Date: November 14, 2024

// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jquery must be loaded for this script to work.

// function
function sortingHat(str) {
    // counts the letters in str and assigns it to a variable length
    len = str.length;
    // uses modulus (% operator) to get the remainder with 4:
    mod = len % 4;
    // mod will now be a value between 0 and 3
    // conditionals that return a house based on mod value
    if (mod = 0) {
        return "North";
    } else if (mod = 1) {
        return "South";
    } else if (mod = 2) {
        return "East";
    } else if (mod = 3) {
        return "West";
    }
}

// Create an click listener attached to #button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    // that gets the value of #input and assigns it to a variable name
    var name = document.getElementById("input").value;
    // runs sortingHat(name) and stores the result in a variable house
    var house = sortingHat(name);
    // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})
