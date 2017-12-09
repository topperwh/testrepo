$( document ).ready(function() {
// Neck rechoice
$('#neckdrop').draggable({
    drag: function() {
       $('#neckdrop').fadeOut(500);
       localStorage.setItem("neck", "");
  $('#neck1, #neck2, #neck3').css("opacity", "1");
  $('#click1, #click2, #click3').css("background-color", "initial");
  $( "#forward1" ).hide( "clip", {direction: "horizontal"}, 1000 );

  if (localStorage.getItem('dress') == null || localStorage.getItem('dress') == '') {
$('#forward2').css("display", 'none');


}



  if ($(".panel2").hasClass("active")) {

       $(".panel2").fadeOut(500);
$(".panel1").fadeIn(2000);

}

if ($(".panel3").hasClass("active")) {

       $(".panel3").fadeOut(500);
$(".panel1").fadeIn(2000);

}

if ($(".panel4").hasClass("active")) {

       $(".panel4").fadeOut(500);
$(".panel1").fadeIn(2000);

}

  if (!$(".panel1").hasClass("active")) {

            $('.panel1').addClass("active");
            $('.panel2.active').removeClass("active");
            $('.panel3.active').removeClass("active");
            $('.panel4.active').removeClass("active");

  }

    }

});

//Fabric Rechoice
$('#dressdrop').draggable({
    drag: function() {
       $('#dressdrop').fadeOut(500);
       localStorage.setItem("dress", "");
  $('#dress1, #dress2, #dress3').css("opacity", "1");
  $( "#forward2" ).hide( "clip", {direction: "horizontal"}, 1000 );


//   if ($(".panel1").hasClass("active") && localStorage.getItem("neck") !== null) {

//        $(".panel1").fadeOut(500);
// $(".panel1").fadeIn(2000);
// $(".panel1").addClass("active");
//  $('.panel2.active').removeClass("active");
// $('.panel3.active').removeClass("active");
// $('.panel4.active').removeClass("active");
// console.log('First Code');

// }

if ($(".panel3").hasClass("active")) {

       $(".panel3").fadeOut(500);
$(".panel2").fadeIn(2000);
$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
$('.panel3.active').removeClass("active");
$('.panel4.active').removeClass("active");

}

if ($(".panel4").hasClass("active")) {

       $(".panel4").fadeOut(500);
$(".panel2").fadeIn(2000);
$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
$('.panel3.active').removeClass("active");
$('.panel4.active').removeClass("active");


}

  if (!$(".panel2").hasClass("active") && !$(".panel1").hasClass("active")) {

            $('.panel1').addClass("active");
            $('.panel2.active').removeClass("active");
            $('.panel3.active').removeClass("active");
            $('.panel4.active').removeClass("active");
            console.log('Last Code');

  }

  

    }

});

//Skirt Length Rechoice
$('.dresslenght').draggable({
    drag: function() {

       localStorage.setItem("skirt", "");
         $('.dresslenght').fadeOut(500);
         $('.dresslenght').css("top", "");
       $('.dresslenght').css("left", "");
       $('img#dressslide').removeClass();
       $('img#dressslide').addClass("mini");
  $( "#dressslide" ).delay(800).attr("src","custom_files/mini.png");
       $(".flat-slider").slider('value', 0);
  // $( "#forward2" ).hide( "clip", {direction: "horizontal"}, 1000 );


       // $( "#forward2" ).hide( "clip", {direction: "horizontal"}, 400 );
       // $( "#colorSelect" ).hide( "clip", {direction: "horizontal"}, 400 );



if ($(".panel3").hasClass("active")) {

       $(".panel3").fadeOut(500);
$(".panel2").fadeIn(2000);
$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
$('.panel3.active').removeClass("active");
$('.panel4.active').removeClass("active");


}
  
if ($(".panel4").hasClass("active")) {
$(".panel4").fadeOut(500);
$(".panel2").fadeIn(2000);
$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
$('.panel3.active').removeClass("active");
$('.panel4.active').removeClass("active");
}

    }

});


//Display dress on Refresh

if (localStorage.getItem('skirt') !== '') {
$('#dressslide').css("display", "block");
console.log('Cool Stuff');
}

//Hide dress on Refresh


if (localStorage.getItem('skirt') == null) {
$('#dressslide').css("display", "none");
console.log('Cool Stuff2');
}



}); // End of Doc Ready