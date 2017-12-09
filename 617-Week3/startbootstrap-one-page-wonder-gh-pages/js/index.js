$( document ).ready(function() {
    //alert("ready!");
    $(".mydiv").click(function() {
    	alert("div was cliked!");
    });

    $(".mydiv2").addClass("selected");

    $(".mydiv3").addClass("highlight");

    $(".mydiv3").click(function() {
    	$(".mydiv3").removeClass("highlight");
    	$(".mydiv3").addClass("yellow");  	
    });

    $("#myimg").click(function() {
    	$("#myimg").attr("src","img/why.gif");
    });

    $(".mydiv4").click(function() {

    	var content = $(this).html();
    	$("#result").text(content);
    	$(this).replaceWith("<h1>jQuery is awesome!</h1>");

    });

    $("#loader").click(function() {
    	$.getJSON('data.json', function(abc){
    		$('#datastage').html('<p>Name :'+ abc.name +'</p>');
    		$('#datastage').append('<p>Occupation :'+ abc.occupation +'</p>');
    		$('#datastage').append('<p>Gender :'+ abc.gender +'</p>');
    	});
    });
    
});