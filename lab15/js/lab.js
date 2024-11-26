// index.js - Lab 15 - AJAX
// Author: Ahmee Smith
// Date: November 21, 2024

// JQuery required for this script

// Click function when button is pressed
$("#activate").click(function(){
    // create random number for the API to call
    var randomId = Math.floor(Math.random() * 1000) + 1; // Random number between 1 and 1000
    // AJAX helped by ChatGPT:
    $.ajax({
        // Use random ID in the URL
        url: "https://pokeapi.co/api/v2/pokemon/" + randomId + "/",
        // Whether this is a POST or GET request
        type: "GET",
        // Type of data we expect back:
        dataType: "json",

        // What to do when the call is successful:
        success: function(data) {
          // Access and print specific details from the response
          console.log("Name:", data.name);
          console.log("Types:", data.types.map(type => type.type.name).join(', '));
          console.log("Abilities:", data.abilities.map(ability => ability.ability.name).join(', '));
            // Append the data to the container
            $('#output').append("<br>", "Name: " + data.name, "<br>", "Types: " + data.types.map(type => type.type.name).join(', '), "<br>", "Abilities: " + data.abilities.map(ability => ability.ability.name).join(', '));
      },
        // What to do if the call fails
        error: function (jqXHR, textStatus, errorThrown) { 
          console.log("Error: ", textStatus, errorThrown);
      }
  });
});