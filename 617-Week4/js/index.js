
$(function() {
	$("#draggable").draggable();
	$("#draggable0").draggable();
	$("#draggable2").draggable();
	$("#droppable3").droppable( {
		drop: function(event,ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped");
		}
	});

	$("#droppable4").droppable( {
		tolerance:"fit", 
		drop: function(event,ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped");
		}
	});

	$("#droppable5").droppable( {
		accept: "#draggable0",
		tolerance:"touch", 
		drop: function(event,ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped");
		}
	});
	$("#resizeable1").resizable();
});