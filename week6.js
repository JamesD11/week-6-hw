//Global Variables

var sports= ["NFL","Lacrosse","Baseball","Hockey","Tennis",
"Basketball","Soccer","Golf","MMA","Rugby","Surfing"];


//For loop to populate buttons
	for (var i = 0; i < sports.length; i++){
        var a = $('<button>')
        a.addClass('sport');
        a.attr('data-name', sports[i]);
        a.text(sports[i]);
        $('#buttons').append(a);
    }
   
   //buttons();

// Add a new button

$("#search").on("click", function(){
	var j= $("#input").val().trim();
	sports.push(j);
	$("#buttons").empty();
	for (var i = 0; i < sports.length; i++){
        var a = $('<button>')
        a.addClass('sport');
        a.attr('data-name', sports[i]);
        a.text(sports[i]);
        $('#buttons').append(a);
    }
   
	return false; 
 });


  //Call API based on button clicked in listener
  //key is dc6zaTOxFJmzC
  
  function results(){
  	var sport= $(this).attr("data-name");
  	var queryURL="http://api.giphy.com/v1/gifs/search?q=" + sport + 
  	"&limit=10&api_key=dc6zaTOxFJmzC"

  	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	 
	 	 console.log(response.data[1].images);


	 	 console.log(queryURL);
	     console.log(response);
	     
	});
}

  



// document wide click listener to determine which button was clicked
// then run function results on it 

$(document).on('click', '.sport', results);






