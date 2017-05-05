$(document).ready(function() {

    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      // data:
      dataType: 'json'

    }).done(function(responseData){

      for (var i=0;i<responseData.candidates.length;i++) {
        $('#election-results').append('<li>'+'name: '+ responseData.candidates[i].name + ', votes: '+ responseData.candidates[i].votes + '</li>');
        var voting_form = $("<form class='voting-form' action='https://bb-election-api.herokuapp.com/vote' method='POST'></form>");
        $(voting_form).append("<input type='hidden' name='name' value="+responseData.candidates[i].name+">");
        $(voting_form).append("<input type='submit' value='Submit'>");
        $('#election-results').append(voting_form);
      }

    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('error: '+errorThrown);
    });

});
