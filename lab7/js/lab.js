// index.js - Lab 7 - Functions
// Author: Ahmee Smith
// Date: October 28, 2024

// Constants

// Functions
// sortUserName = a functions that sorts the user's name alphabetically
function sortUserName() {
    var userName = window.prompt("Hi, please tell me your name.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array into string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // return sorted name:
    return nameSorted;
}

// output
document.writeln("Your name evolved into: ",
    sortUserName(), "</br>");
