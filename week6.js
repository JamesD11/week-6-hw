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
	 	 
          $("#results").empty();

          // take results and loop through them to pull out required catergories   
	 	     for(var i=0; i<response.data.length;i++){
          console.log(response.data[i].images.fixed_height.url);
          console.log(response.data[i].rating);

          var answer= $("<div>"); 
          answer.addClass("gif");
          answer.attr("id","number-" + i);
          
          answer.append("<a href=" + response.data[i].images.fixed_height.url + ">" + response.data[i].images.fixed_height.url + "</a>" );
          // leaving link here so user can click to get the gif even if I'm not displaying it
          //or("<img src='response.data[i].images.fixed_height.url'>" );
          //or .show()????
          //or some sort of response.stringify/parse issue??
          answer.append("<p> Rating: " + response.data[i].rating + "</p>" );
          $("#results").append(answer);


        
	 	      console.log(queryURL);
	        console.log(response);
        }
	     
	});
}

//function to animate gif's
/*function play(){
  var choice= $(this).attr("number-"+i);
  //animate gif
  choice.append(//url to looping gif)
  //basically would load images to page static and "on click" load a looping gif inplace of the static image
}*/

  



// document wide click listener to determine which button was clicked
// then run function results on it 

$(document).on("click", ".sport", results);

//document wide click listener for each gif to play
 
// $(document).on("click", ".gif", play);






