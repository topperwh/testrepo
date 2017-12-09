$( document ).ready(function() {

// $( "#red" ).mouseover(function() {
//   $( ".red:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 red) brightness(3)"});

// });


// $( "#red" ).mouseout(function() {
//   $( ".red ~ img" ).css("filter", "");
  


  
// });

// $( "#green" ).mouseover(function() {
//   $( ".green:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 green) brightness(3)"});
// });


// $( "#green" ).mouseout(function() {
//   $( ".green ~ img" ).css("filter", "");
// });

// $( "#yellow" ).mouseover(function() {
//   $( ".yellow:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 yellow) brightness(3)"});
// });

// $( "#white" ).mouseover(function() {
//   $( ".white:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 white) brightness(3)"});
// });


// $( "#yellow" ).mouseout(function() {
//   $( ".yellow ~ img" ).css("filter", "");
// });

// $( "#pink" ).mouseover(function() {
//   $( ".pink:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 pink) brightness(3)"});
// });


// $( "#pink" ).mouseout(function() {
//   $( ".pink ~ img" ).css("filter", "");
// });

// $( "#purple" ).mouseover(function() {
//   $( ".purple:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 purple) brightness(3)"});
// });


// $( "#purple" ).mouseout(function() {
//   $( ".purple ~ img" ).css("filter", "");
// });

// $( "#black" ).mouseover(function() {
//   $( ".black:hover ~ img" ).css({"filter": "opacity(1) drop-shadow(0 0 0 black) brightness(3)"});
// });


// $( "#black" ).mouseout(function() {
//   $( ".black ~ img" ).css("filter", "");
// });

// $( "#silver" ).mouseover(function() {
//   $( ".silver:hover ~ img" ).css({"filter": "opacity(.2) drop-shadow(0 0 0 white)"});
// });


// $( "#silver" ).mouseout(function() {
//   $( ".silver ~ img" ).css("filter", "");
// });

// $( "#white" ).mouseout(function() {
//   $( ".white ~ img" ).css("filter", "");
// });


//Click Dress color Code





$( "#red" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}
}); /*End of Red*/



$( "#silver" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/grayneck1.png");
  $( "#dressslide" ).attr("src","custom_files/graymini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/grayneck2.png");
  $( "#dressslide" ).attr("src","custom_files/graymini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/grayneck3.png");
  $( "#dressslide" ).attr("src","custom_files/graymini.png");

	}
}); /*End of silver*/

$( "#black" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/blackneck1.png");
  $( "#dressslide" ).attr("src","custom_files/blackmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/blackneck2.png");
  $( "#dressslide" ).attr("src","custom_files/blackmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/blackneck3.png");
  $( "#dressslide" ).attr("src","custom_files/blackmini.png");

	}
}); /*End of black*/

$( "#yellow" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}
}); /*End of yellow*/

$( "#green" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/greenneck1.png");
  $( "#dressslide" ).attr("src","custom_files/greenmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/greenneck2.png");
  $( "#dressslide" ).attr("src","custom_files/greenmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/greenneck3.png");
  $( "#dressslide" ).attr("src","custom_files/greenmini.png");

	}
}); /*End of green*/


$( "#pink" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/pinkneck1.png");
  $( "#dressslide" ).attr("src","custom_files/pinkmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/pinkneck2.png");
  $( "#dressslide" ).attr("src","custom_files/pinkmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/pinkneck3.png");
  $( "#dressslide" ).attr("src","custom_files/pinkmini.png");

	}
}); /*End of pink*/

$( "#purple" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/purpleneck1.png");
  $( "#dressslide" ).attr("src","custom_files/purplemini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/purpleneck2.png");
  $( "#dressslide" ).attr("src","custom_files/purplemini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/purpleneck3.png");
  $( "#dressslide" ).attr("src","custom_files/purplemini.png");

	}
}); /*End of purple*/

$( "#white" ).click(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/whiteneck1.png");
  $( "#dressslide" ).attr("src","custom_files/whitemini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/whiteneck2.png");
  $( "#dressslide" ).attr("src","custom_files/whitemini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/whiteneck3.png");
  $( "#dressslide" ).attr("src","custom_files/whitemini.png");

	}
}); /*End of white*/

//Hover Dress color Code





$( "#red" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}
}); /*End of Red*/



$( "#silver" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/grayneck1.png");
  $( "#dressslide" ).attr("src","custom_files/graymini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/grayneck2.png");
  $( "#dressslide" ).attr("src","custom_files/graymini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/grayneck3.png");
  $( "#dressslide" ).attr("src","custom_files/graymini.png");

	}
}); /*End of silver*/

$( "#black" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/blackneck1.png");
  $( "#dressslide" ).attr("src","custom_files/blackmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/blackneck2.png");
  $( "#dressslide" ).attr("src","custom_files/blackmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/blackneck3.png");
  $( "#dressslide" ).attr("src","custom_files/blackmini.png");

	}
}); /*End of black*/

$( "#yellow" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}
}); /*End of yellow*/

$( "#green" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/greenneck1.png");
  $( "#dressslide" ).attr("src","custom_files/greenmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/greenneck2.png");
  $( "#dressslide" ).attr("src","custom_files/greenmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/greenneck3.png");
  $( "#dressslide" ).attr("src","custom_files/greenmini.png");

	}
}); /*End of green*/


$( "#pink" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/pinkneck1.png");
  $( "#dressslide" ).attr("src","custom_files/pinkmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/pinkneck2.png");
  $( "#dressslide" ).attr("src","custom_files/pinkmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/pinkneck3.png");
  $( "#dressslide" ).attr("src","custom_files/pinkmini.png");

	}
}); /*End of pink*/

$( "#purple" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/purpleneck1.png");
  $( "#dressslide" ).attr("src","custom_files/purplemini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/purpleneck2.png");
  $( "#dressslide" ).attr("src","custom_files/purplemini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/purpleneck3.png");
  $( "#dressslide" ).attr("src","custom_files/purplemini.png");

	}
}); /*End of purple*/

$( "#white" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/whiteneck1.png");
  $( "#dressslide" ).attr("src","custom_files/whitemini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/whiteneck2.png");
  $( "#dressslide" ).attr("src","custom_files/whitemini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/whiteneck3.png");
  $( "#dressslide" ).attr("src","custom_files/whitemini.png");

	}
}); /*End of white*/


    });  // eND OF doc READY