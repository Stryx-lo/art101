// index.js - Lab 6 - Arrays and Objects
// Author: Ahmee Smith
// Date: October 23, 2024

// Constants

// Functions

// Variables
myTransport = ["car", "bike", "bus", "walking"];

// Create an object for my main ride
const myMainRide = {
  make: "Toyota",
  model: "RAV4",
  color: "Pyrite",
  year: 2011,
  age: function() {
      return 2024 - this.year;
    }
}

// output
document.writeln("Kinds of  transportation I use: ", myTransport, "<br>");

// write an object into the document
document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");