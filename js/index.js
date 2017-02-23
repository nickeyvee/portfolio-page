
$(document).on("mouseenter", ".flex-item", function() {
	 $(this).css("box-shadow", "1px 2px 5px grey" );
});

$(document).on("mouseleave", ".flex-item", function() {
   $(this).css("box-shadow" , "5px 8px 10px grey" )
});