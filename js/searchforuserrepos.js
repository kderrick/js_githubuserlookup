var apiKey = require('./../.env').apiKey;

exports.searchForUserRepos = function(inputUser) {
  $.get('https://api.github.com/users/'+ inputUser +'/repos?per_page=100&?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      $(".showRepos").append('<li>' + response[i].name + " " + response[i].description + '</li>')
      // console.log(response[i].name + " Description:" + response[i].description)
    }
    // console.log(JSON.stringify(response));
    // var userRepos = response;
    // console.log(userRepos);
    // return userRepos;


  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
