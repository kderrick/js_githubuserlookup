var searchForUser = require('./../js/searchforuser.js').searchForUser;
var searchForUserRepos = require('./../js/searchforuserrepos.js').searchForUserRepos;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {

  // $('.showUser1').text(moment());
  $('#userLookup').click(function() {
    var test = [];
    var inputUserName = $('#inputUserName').val();
    $('#inputUserName').val("");
    // $(".showUser").text("The user your searched for is: " + inputUserName + " Here are that user's repositories: " + searchForUserRepos(inputUserName));

    var test = searchForUserRepos(inputUserName);
    $(".showRepos").append(test);


    // searchForUser(inputUserName);
    // searchForUserRepos(inputUserName);


  });

});
