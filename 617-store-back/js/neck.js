$( document ).ready(function() {

$( "#click1" ).click(function() {
  $('#neckdrop').html('');
  $('#neckdrop').html('<img id="neck1" class="neckdisplay" src="custom_files/neck1.png">');
  $('#click2, #click3, #click4').css("background-color", "initial");
            $('#neck2, #neck3').css("opacity", "0.5");
            $('#neck1').css("opacity", "initial");
            $('#click1').css("background-color", "pink");
            localStorage.setItem("neck", "1");
  $('#firsth2, #main2, #clear-btn').css("display", "none");
  $('#secondh2, #main, #clear-btn2').css("display", "flex");


            // $('#click1').click(false);
            // $('#click2, #click3, #click4').click(true);
            // console.log(localStorage.getItem('dress'));
});

$( "#click2" ).click(function() {
 
$('#neckdrop').html('');
  $('#neckdrop').html('<img id="neck2" class="neckdisplay" src="custom_files/neck2.png">');
  $('#click1, #click3, #click4').css("background-color", "initial");
            $('#neck1, #neck3').css("opacity", "0.5");
            $('#neck2').css("opacity", "initial");
            $('#click2').css("background-color", "pink");
            localStorage.setItem("neck", "2");
            $('#firsth2, #main2, #clear-btn').css("display", "none");
  $('#secondh2, #main, #clear-btn2').css("display", "flex");
            // $('#click2').click(false);
            // $('#click1, #click3, #click4').click(true);
            // console.log(localStorage.getItem('dress'));
});

$( "#click3" ).click(function() {

$('#neckdrop').html('');
  $('#neckdrop').html('<img id="neck3" class="neckdisplay" src="custom_files/neck3.png">');
  $('#click1, #click2, #click4').css("background-color", "initial");
            $('#neck1, #neck2').css("opacity", "0.5");
            $('#neck3').css("opacity", "initial");
            $('#click3').css("background-color", "pink");
            localStorage.setItem("neck", "3");
            $('#firsth2, #main2, #clear-btn').css("display", "none");
  $('#secondh2, #main, #clear-btn2').css("display", "flex");
            // $('#click3').click(false);
            // $('#click1, #click2, #click4').click(true);
            // console.log(localStorage.getItem('dress'));





});


if (localStorage.getItem("neck") == "1") {

  document.getElementById('neckdrop').innerHTML = '<img id="neck1" class="neckdisplay" src="custom_files/neck1.png">';
  document.getElementById('click1').style.backgroundColor = 'pink';
  $('#neck2, #neck3').css("opacity", "0.5");

}

if (localStorage.getItem("neck") == "2") {

  document.getElementById('neckdrop').innerHTML = '<img id="neck2" class="neckdisplay" src="custom_files/neck2.png">';
  document.getElementById('click2').style.backgroundColor = 'pink';
  $('#neck1, #neck3').css("opacity", "0.5");

  
}

if (localStorage.getItem("neck") == "3") {

  document.getElementById('neckdrop').innerHTML = '<img id="neck3" class="neckdisplay" src="custom_files/neck3.png">';
  document.getElementById('click3').style.backgroundColor = 'pink';
  $('#neck2, #neck1').css("opacity", "0.5");
  ;


  
}

$.fn.myFunction2 = function(){ 
       localStorage.removeItem("neck");
       $('#neck2, #neck3, #neck1').css("opacity", "initial");
       $('#click1, #click2, #click3').css("background-color", "initial");
       $('#neckdrop').html("");

    }
    $(".clearneck-btn").click(function(){
        $.fn.myFunction2();
    });





});