var searchForUser = require('./../js/searchforuser.js').searchForUser;
var searchForUserRepos = require('./../js/searchforuserrepos.js').searchForUserRepos;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {

  // $('.showUser1').text(moment());

  $('#userLookup').click(function() {
    var inputUsername = $('#inputUserName').val();
    $('#inputUsername').val("");
    $(".showUser").text("The user your searched for is: " + inputUsername);

    searchForUser();
    searchForUserRepos();

  });

});
