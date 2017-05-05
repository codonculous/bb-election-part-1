$(document).ready(function() {



    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      // data:
      dataType: 'json'

    }).done(function(responseData){

      for (var i=0;i<responseData.candidates.length;i++) {
        $('#election-results').append("<li class='votes'>"+"name: "+ responseData.candidates[i].name + ", votes: "+ responseData.candidates[i].votes + "</li>");
        var voting_form = $("<form class='voting-form' action='https://bb-election-api.herokuapp.com/vote' method='POST'></form>");
        $(voting_form).append("<input type='hidden' name='name' value="+responseData.candidates[i].name+">");
        $(voting_form).append("<input type='submit' value='Submit'>");
        $('#election-results').append(voting_form);
      }

      $('.voting-form').on('submit',function(e){
        e.preventDefault();
        console.log($(this).children('input[type=hidden]').val());
        console.log($(this).attr('method')+' to '+$(this).attr('action'));

        $.ajax({
          method:$(this).attr('method'),
          url: $(this).attr('action'),
          data:{name: $(this).children('input[type=hidden]').val()},
        }).done(function(){
        }).fail(function(){

          console.log("Voting failed!");
        });
      });

    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('error: '+errorThrown);
    });

    $('#refresh').click(function(){
      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/',
        method: 'GET',
        dataType: 'json'

      }).done(function(responseData){
        // debugger
        console.log(  $($('.votes')[0]));
        for (var j =0;j<responseData.candidates.length;j++) {
        $($('.votes')[j]).text("name: "+ responseData.candidates[j].name + ", votes: "+ responseData.candidates[j].votes);
        // location.reload();
        // $('body').append("<div id='refreshDiv'>v</div>");
        // $('#refreshDiv').remove();
        }
      });


    });



});
