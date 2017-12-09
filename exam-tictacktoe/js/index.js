
$(function() {
	$("#draggable, #draggable2, #draggable3, #draggable4, #draggable5, #draggable6, #draggable7, #draggable8, #draggable9 ").draggable();


	$("#droppable, #droppable2, #droppable3, #droppable4, #droppable5, #droppable6, #droppable7, #droppable8, #droppable9 ").droppable( {
		tolerance:"fit", 
		drop: function(event,ui) {
			$(this).addClass("ui-state-highlight");
		}
	});

});