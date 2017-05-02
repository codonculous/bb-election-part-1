$(document).ready(function() {

    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      // data:
      dataType: 'json'
      
    }).done(function(responseData){
      console.log('data: '+ responseData);

      for (var i=0;i<responseData.candidates.length;i++) {
        $('#election-results').append('<li>'+'name: '+ responseData.candidates[i].name + ', votes: '+ responseData.candidates[i].votes + '</li>');
      }

    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('error: '+errorThrown);
    });

});
