$( document ).ready(function() {
    
$("#draggable1, #draggable2,#draggable3,#draggable4").draggable({

    helper:'clone'

});

$("#droppable").droppable({
   tolerance: 'intersect',
    drop: function(event, ui) {
        if (ui.draggable.is('#draggable1')) {

            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="dress1" src="custom_files/dress1.jpg">');
            $('#draggable2, #draggable3, #draggable4').css("background-color", "initial");
            $('#dress2, #dress3, #dress4').css("opacity", "0.5");
            $('#dress1').css("opacity", "initial");
            $('#draggable1').css("background-color", "blanchedalmond");
            localStorage.setItem("dress", "1");
            $('#draggable2, #draggable3, #draggable4').draggable( "enable" );
            $('#draggable1').draggable( "disable" );
             $('#dressslide, #sliderSelect').css("display", "initial");
  $('#secondh2, #main, #clear-btn2').css("display", "none");
            // console.log(localStorage.getItem('dress'));


        }
 if (ui.draggable.is('#draggable2')) {
            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="dress2" src="custom_files/dress2.jpg">');
            $('#draggable1, #draggable3, #draggable4').css("background-color", "initial");
            $('#dress1, #dress3, #dress4').css("opacity", "0.5");
            $('#dress2').css("opacity", "initial");
            $('#draggable2').css("background-color", "blanchedalmond");
            localStorage.setItem("dress", "2");
            $('#draggable2').draggable( "disable" );
            $('#draggable1, #draggable3, #draggable4').draggable( "enable" );
             $('#dressslide, #sliderSelect').css("display", "initial");
  $('#secondh2, #main, #clear-btn2').css("display", "none");
            // console.log(localStorage.getItem('dress'));

        }

        if (ui.draggable.is('#draggable3')) {
            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="dress3" src="custom_files/dress3.jpg">');
            $('#draggable1, #draggable2, #draggable4').css("background-color", "initial");
            $('#dress2, #dress1, #dress4').css("opacity", "0.5");
            $('#dress3').css("opacity", "initial");
            $('#draggable1, #draggable2, #draggable4').draggable( "enable" );
            $('#draggable3').draggable( "disable" );
            $('#draggable3').css("background-color", "blanchedalmond");
            localStorage.setItem("dress", "3");
            $('#dressslide, #sliderSelect').css("display", "initial");
  $('#secondh2, #main, #clear-btn2').css("display", "none");
            // console.log(localStorage.getItem('dress'));

        }

        if (ui.draggable.is('#draggable4')) {
            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="dress4" src="custom_files/dress4.jpg">');
            $('#draggable1, #draggable3, #draggable2').css("background-color", "initial");
            $('#dress2, #dress3, #dress1').css("opacity", "0.5");
            $('#dress4').css("opacity", "initial");
            $('#draggable1, #draggable3, #draggable2').draggable( "enable" );
            $('#draggable4').draggable( "disable" );
            $('#draggable4').css("background-color", "blanchedalmond");
            localStorage.setItem("dress", "4");
             $('#dressslide, #sliderSelect').css("display", "initial");
  $('#secondh2, #main, #clear-btn2').css("display", "none");
            // console.log(localStorage.getItem('dress'));

        }

    }
});
if (localStorage.getItem("dress") == "1") {

  document.getElementById('dressdrop').innerHTML = '<img class="dress1" src="custom_files/dress1.jpg">';
  document.getElementById('draggable1').style.backgroundColor = 'blanchedalmond';
  $('#dress2, #dress3, #dress4').css("opacity", "0.5");
  $('#dress1').css("opacity", "initial");

  $('#draggable2, #draggable3, #draggable4').draggable( "enable" );
            $('#draggable1').draggable( "disable" );


}

if (localStorage.getItem("dress") == "2") {

  document.getElementById('dressdrop').innerHTML = '<img class="dress2" src="custom_files/dress2.jpg">';
  document.getElementById('draggable2').style.backgroundColor = 'blanchedalmond';
  $('#dress1, #dress3, #dress4').css("opacity", "0.5");
  $('#dress2').css("opacity", "initial");
  $('#draggable2').draggable( "disable" );
            $('#draggable1, #draggable3, #draggable4').draggable( "enable" );

  
}

if (localStorage.getItem("dress") == "3") {

  document.getElementById('dressdrop').innerHTML = '<img class="dress3" src="custom_files/dress3.jpg">';
  document.getElementById('draggable3').style.backgroundColor = 'blanchedalmond';
  $('#dress2, #dress1, #dress4').css("opacity", "0.5");
  $('#dress3').css("opacity", "initial");

  $('#draggable1, #draggable2, #draggable4').draggable( "enable" );
            $('#draggable3').draggable( "disable" );


  
}

if (localStorage.getItem("dress") == "4") {

  document.getElementById('dressdrop').innerHTML = '<img class="dress4" src="custom_files/dress4.jpg">';
  document.getElementById('draggable4').style.backgroundColor = 'blanchedalmond';
  $('#dress2, #dress3, #dress1').css("opacity", "0.5");
  $('#dress4').css("opacity", "initial");

   $('#draggable1, #draggable3, #draggable2').draggable( "enable" );
            $('#draggable4').draggable( "disable" );

  
}

$.fn.myFunction = function(){ 
       localStorage.removeItem("dress");
       $('#dress2, #dress3, #dress1, #dress4').css("opacity", "initial");
       $('#draggable1, #draggable2, #draggable3, #draggable4').css("background-color", "initial");
       $('#dressdrop').html("");

    }
    $(".clear-btn").click(function(){
        $.fn.myFunction();
    });



});