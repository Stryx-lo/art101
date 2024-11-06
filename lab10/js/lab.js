// index.js - Lab 10 - Javascript for the Web
// Author: Ahmee Smith
// Date: November 5, 2024

// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jquery must be loaded for this script to work.

// Function that generates random fruits list
function generateRandomText() {
    // This is our random text:
    const text = "apple orange banana strawberry blueberry raspberry avocado tomato lemon pomegranate watermelon pear grapes mango peach";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the fruit list
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random fruit list
    return text.slice(randStart, randStart + randLen);
  }

// get new fake dialogue
const newText = generateRandomText();

// click listener for button
$("#button-output").click(function(){
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
