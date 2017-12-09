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

}); // End of Doc Ready
