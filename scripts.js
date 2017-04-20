
/*make a DIV with position absolute/fixed and centered.
On click get the URL of image and put this inside the new DIV in a img tag.
Finally Add a fadeIn/Out to the new DIV for the effect. ==> stackoverflow
*/

$(document).ready(function(){

  $("img").on("click", function() {
		var overlay = $("<div class='popup-overlay'></div>");
		var source = $(this).attr("src");     //getting source of clicked image
		var img = $("<img src=''>");
		var image = $(img).attr("src", source);
		//var resize = $(image).width("500px");
		var final = $(overlay).append(image);   //add image to overlay div
		var overlay2 = $("html").append(final);
		$(overlay2).fadeIn(350);


    $(".popup-overlay").on("click", function() {      // remove overlay+image
    //  remove = $(this).attr("src", "#");
    //  remove = $("html").remove(this);
       remove = $(".popup-overlay").empty();
      $(remove).fadeOut(350);
    })
	})


  var newDiv = $("<div class='symbol'></div>");
  var symbol = $("<i class='fa fa-4x fa-angle-double-down aria-hidden='true'></i>");
  var link = $("<a href='#about-me'></a>");
  var add = $(link).append(symbol);
  var add2 = $(newDiv).prepend(add);
  $("#home").prepend(add2);





})
