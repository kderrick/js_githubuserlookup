// var toCelcius = require('./../js/temperature.js').toCelcius;
// var toFahrenheit = require('./../js/temperature.js').toFahrenheit;

// var apiKey = "";
function searchForUser(inputUsername) {
  $.get('https://api.github.com/users/' + inputUsername + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

function searchForUserRepos(inputUsername) {
  $.get('https://api.github.com/users/' + inputUsername + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}




$(document).ready(function() {
  $('#userLookup').click(function() {
    var inputUsername = $('#inputUserName').val();
    $('#inputUsername').val("");
    $(".showUser").text("The user your searched for is: " + inputUsername);
    

    });

  });
