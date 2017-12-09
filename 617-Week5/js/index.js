$(function() {

    $("#slider1").slider();
    $("#dialog-1").dialog({
        autoOpen: false,
        buttons: {
            OK: function() { $(this).dialog("close");}
        }
    });
    $("#launcher").click(function(){
        $("#dialog-1").dialog("open");
    });
    $("#datepicker1").datepicker();
    $("#button1").button();
    $("#button2").button();
    $("#button3").button();
    $("#button4").button();
    $("#accordion-1").accordion({
    	collapsible: true 
    });
    $("#menu-1").menu();

    var searchDBString = [
    "San Francisco",
    "San Jose",
    "San Mateo",
    "Senfrari world",
    "Sense Clala"
    ];


    $("#autocomplete-1").autocomplete({
    	source: searchDBString
    });
    

});