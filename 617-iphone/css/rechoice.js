$( document ).ready(function() {
// Neck rechoice
$('#neckdrop').draggable({
    drag: function() {
       $('#neckdrop').css("display", "none");
       localStorage.setItem("neck", "");
  $('#neck1, #neck2, #neck3').css("opacity", "1");

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
       $('#dressdrop').css("display", "none");
       localStorage.setItem("dress", "");
  $('#dress1, #dress2, #dress3').css("opacity", "1");

  if ($(".panel1").hasClass("active")) {

       $(".panel1").fadeOut(500);
$(".panel3").fadeIn(2000);

}

if ($(".panel3").hasClass("active")) {

       $(".panel3").fadeOut(500);
$(".panel2").fadeIn(2000);

}

if ($(".panel4").hasClass("active")) {

       $(".panel4").fadeOut(500);
$(".panel2").fadeIn(2000);

}

  if (!$(".panel2").hasClass("active") && !$(".panel1").hasClass("active")) {

            $('.panel2').addClass("active");
            $('.panel1.active').removeClass("active");
            $('.panel3.active').removeClass("active");
            $('.panel4.active').removeClass("active");

  }

    }

});


}); // End of Doc Ready