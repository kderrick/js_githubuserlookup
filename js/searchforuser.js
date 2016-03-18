var apiKey = require('./../.env').apiKey;

exports.searchForUser =function(inputUser) {
  $.get('https://api.github.com/users/' + inputUser + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
