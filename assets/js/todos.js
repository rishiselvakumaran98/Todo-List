$("ul").on("click", "li", function(){ // function runs when you click an li inside of an ul
	$(this).toggleClass("completed"); // toggles the completed class attributes from css page
});

//Click on X to deleter Todo

$("ul").on("click", "span", function(event){ // choose the top parent element and then on click activate the span tag
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var TodoText = $(this).val();
		$(this).val(""); // clears the textbox after user hits enter
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+TodoText+"</li>"); // Adds the new variable to the List
	}
});

$("#plus").click(function(){
	$("input[type='text'").fadeToggle();
});
