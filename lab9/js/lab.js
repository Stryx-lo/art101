// index.js - Lab 9 - Libraries and jQuery
// Author: Ahmee Smith
// Date: November 4, 2024

// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// jquery must be loaded for this script to work.

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make it Fun!</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make it Fun!</button>");
// add a click listener to the problems button
$("#button-problems").click(function() {
    // now toggle the "special" class to the section
    $("#problems").toggleClass("special");
})

// add button to results section
$("#results").append("<button id='button-results'>Make it Fun!</button>");
// add a click listener to the results button
$("#button-results").click(function() {
    // now toggle the "special" class to the section
    $("#results").toggleClass("special");
})

