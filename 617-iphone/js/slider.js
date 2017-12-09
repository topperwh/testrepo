$( document ).ready(function() {
  
$("#flat-slider").slider({
    animate: "slow",
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
  range:       false,
    slide: function(event, ui) {
        
        
        if (ui.value <= 29.9999) {
          
          // $("#pictureContainer").html('<img src="dressSlide_files/mini.jpg"> <p>mini</p>');
          // $("#pictureContainer").html('<p>Great day were having Not!</p>');
         $("#placementText").html('<p>mini</p>');
          // $("#pictureContainer, img").removeClass();
          $("#pictureContainer, #dressslide").addClass('mini');
          localStorage.setItem("skirt", "1");
          // $("#dressslide").removeClass('maxidress');
          // $("#dressslide").removeClass('mididress');
          // $("#dressslide").addClass('minidress');


      
    if ($('#dressslide').hasClass('midi')) {
      // alert('yo');
     

      $("#pictureContainer, #dressslide").removeClass();
      $("#pictureContainer, #dressslide").addClass('mini');


      $("#pictureContainer, #dressslide").addClass('minileft');
   }


   if ($('#dressslide').hasClass('maxi')) {
      // alert('yo');
      
      $("#pictureContainer, #dressslide").removeClass();
      $("#pictureContainer, #dressslide").addClass('mini');
      $("#pictureContainer, #dressslide").addClass('minidragleft');
   }



        }
         if (ui.value >= 30 && ui.value <= 74.9999) {
         
          // $("#pictureContainer").html('<#dressslide src="dressSlide_files/midi.jpg"> <p>midi</p>');
          // $("#pictureContainer").html('<p>Great Aternion</p>');
         $("#placementText").html('<p>midi</p>');
         localStorage.setItem("skirt", "2");
        // $("#pictureContainer, #dressslide").removeClass();
          $("#pictureContainer, #dressslide").addClass('midi');
          // $("#dressslide").removeClass('maxidress');
          // $("#dressslide").removeClass('minidress');
          // $("#dressslide").addClass('mididress');


          if ($('#dressslide').hasClass('mini')) {
      // alert('yo');
      $("#pictureContainer, #dressslide").removeClass();
          $("#pictureContainer, #dressslide").addClass('midi');
      $("#pictureContainer, #dressslide").addClass('midiright');
   }

   if ($('#dressslide').hasClass('maxi')) {
      // alert('yo');

      $("#pictureContainer, #dressslide").removeClass();
          $("#pictureContainer, #dressslide").addClass('midi');
     
      $("#pictureContainer, #dressslide").addClass('maxileft');
   }

        }
         if (ui.value >= 75) {
          
          // $("#pictureContainer").html('<#dressslide src="dressSlide_files/maxi.jpg"> <p>mini</p>');
          // $("#pictureContainer").html('<p>Good Night</p>');
         $("#placementText").html('<p>maxi</p>');
         localStorage.setItem("skirt", "3");
          // $("#pictureContainer, #dressslide").removeClass();
          $("#pictureContainer, #dressslide").addClass('maxi');
          // $("#dressslide").removeClass('minidress');
          // $("#dressslide").removeClass('mididress');
          // $("#dressslide").addClass('maxidress');


    if ($('#dressslide').hasClass('midi')) {
      // alert('yo');
      $("#pictureContainer, #dressslide").removeClass();
          $("#pictureContainer, #dressslide").addClass('maxi');
      
      $("#pictureContainer, #dressslide").addClass('maxiright');
   }

   if ($('#dressslide').hasClass('mini')) {
      // alert('yo');
      $("#pictureContainer, #dressslide").removeClass();
          $("#pictureContainer, #dressslide").addClass('maxi');
      
      $("#pictureContainer, #dressslide").addClass('maxidragright');
   }

        }

   
       // $('.onload').fadeOut(function(){$('[data-value='+ui.value+']').fadeIn().addClass('onload');}).removeClass('onload');
       


    }


});

if (localStorage.getItem("skirt") == "") {
  $(".flat-slider").slider('value', 0);
  $( "#dressslide" ).removeClass();
  $('#dressslide').addClass('mini');

  console.log('Skirt 1');
}

if (localStorage.getItem("skirt") == "1") {
  $(".flat-slider").slider('value', 25);
  $( "#dressslide" ).removeClass();
  $('#dressslide').addClass('mini');

  console.log('Skirt 1');
}

if (localStorage.getItem("skirt") == "2") {
 $(".flat-slider").slider('value', 50);
 $( "#dressslide" ).removeClass();
 $('#dressslide').addClass('midi');
  console.log('Skirt 2');

  
}

if (localStorage.getItem("skirt") == "3") {
  $(".flat-slider").slider('value', 85);
  $( "#dressslide" ).removeClass();
$('#dressslide').addClass('maxi');
  console.log('Skirt 3');
  
}


}); // End of Doc Ready
