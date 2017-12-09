

// http://jsfiddle.net/x11joex11/9g8NN/

$(document).ready(function(){
  //You might want to do if check to see if localstorage set for theImage here
  var img = new Image();

  if (localStorage.getItem('theImage') !== null) { 
                console.log('Image from file Remains. Muahahahaha');
  img.src = localStorage.getItem('theImage');
  
  }
                 
  // img.src = localStorage.removeItem('theImage');
  
  if (localStorage.getItem('pattern') !== null) { 
                console.log('Image from drawing board Remains. Muahahahaha');
  img.src = localStorage.getItem('pattern');
  
  }

              $("img").css({"width": "110px", "height": "110px"});

  $('.imagearea').html(img);

  $("body").on("change",".classhere",function(){
      //Equivalent of getElementById
      var fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
      var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

      var reader = new FileReader();
      reader.onload = function(e) {
           // Create a new image.
           var img = new Image();

           img.src = reader.result;
           localStorage.theImage = reader.result; //stores the image to localStorage
           localStorage.removeItem('pattern');
           $(".imagearea").html(img);
    $("img").css({"width": "110px", "height": "110px"});

           
           
       }

       reader.readAsDataURL(file);//attempts to read the file in question.
    });
  // $('.imagearea').css("display", "block");
    $("img").css({"width": "110px", "height": "110px"});
    $('.imagearea > img').attr('alt', 'No Pattern Selected Yet');
    


  //   if ('img src="undefined"') {
  // $('.imagearea').css("display", "none");
  //   }


$.fn.eraseImage = function(){ 
      localStorage.removeItem('theImage');
      localStorage.removeItem('pattern');
  location.reload();

    }
    $(".erase").click(function(){
        $.fn.eraseImage();
    });

// Canvas Local Storage

});