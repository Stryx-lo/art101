// index.js - Lab 13 - Loops
// Author: Ahmee Smith
// Date: November 18, 2024

// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// jquery must be loaded for this script to work.

// FizzBuzz function
var oneLongString = "";
// Loop through numbers 1 to 200, listing them as you go
for (let i=1; i<=200; i++) {
    // multiple of 3, 5, 7= fizzbuzzboom
    if (i%105 == 0) {
        console.log("FizzBuzzBoom")
        oneLongString += " FizzBuzzBoom<br>";
    }
    // multiple of 5 and 7 = buzzboom
    else if (i%35 ==0) {
        console.log("BuzzBoom");
        oneLongString += " BuzzBoom<br>"; 
    }
    // multiple of 3 and 7 = fizzboom
    else if (i%21 == 0) {
        console.log("FizzBoom");
        oneLongString += " FizzBoom<br>"; 
    }
    // multiple of 3 and 5 = fizzbuzz
    else if (i%15 == 0){
        console.log("FizzBuzz");
        oneLongString += " FizzBuzz<br>"; 
    }
    // If the number is a multiple of 7, it should print "Boom!"
    else if (i%7 == 0) {
        console.log("Boom");
        oneLongString += " Boom<br>"; 
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    else if (i%5 == 0) {
        console.log("Buzz");
        oneLongString += " Buzz<br>"; 
    }
    // If the number is a multiple of 3, if should print "Fizz!"
    else if (i%3 == 0) {
        console.log("Fizz");
        oneLongString += " Fizz!<br>"; 
    }
    else {
        console.log(i);
        oneLongString += " None<br>";
    }
}
// Make it so the output of your program appears in your output div. 
$("#output").html(oneLongString);
// Credit to Wesbot for debugging help