// index.js - Lab 16 - JSON and APIs
// Author: Ahmee Smith
// Date: December 2, 2024

// JQuery required for this script

// Define the API endpoint
let endpoint = "https://api.chucknorris.io/jokes/random";

// Configure the AJAX request
let comicObj = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  dataType: "json", // Payload type
  data: { 
    api_key: "3fCSt62SDB8RHe2JvaHOOBagjEUraQIPJb5maF3X", // API token  
  },
  
  success: function(data) { // Success handler
    //console.log(data);
    // append image:
    $("#output").append("<img src=" + data.icon_url + ">");
    // append Chuck Norris Fact:
    $("#output").append("<br>" + data.value);
    // append link to website
    $("#output").append("<br><a href=" + data.url + ">Chuck Norris Facts Website</a>")
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
    // console.log("no");
  } 
};

//$("#output").append(data.title)
// Send the AJAX request
$.ajax(comicObj);

