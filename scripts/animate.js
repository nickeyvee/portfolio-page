$(document).ready( ()=> {

$(document).on("mouseenter", ".flex-item", function() {
	 $(this).css("box-shadow", "1px 2px 5px grey" );
});

$(document).on("mouseleave", ".flex-item", function() {
   $(this).css("box-shadow" , "5px 8px 10px grey" )
});

$(document).on("mouseenter", ".user-info", function() {
	 $(this).css("box-shadow", "1px 2px 5px grey" );
});

$(document).on("mouseleave", ".user-info", function() {
   $(this).css("box-shadow" , "3px 3px 15px grey" )
});

});