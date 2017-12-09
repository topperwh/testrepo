$( document ).ready(function() {

$( "#red" ).mouseover(function() {
  $( ".red:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 red) brightness(350%)"});
});


$( "#red" ).mouseout(function() {
  $( ".red ~ img" ).css("filter", "");
});

$( "#green" ).mouseover(function() {
  $( ".green:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 green)"});
});


$( "#green" ).mouseout(function() {
  $( ".green ~ img" ).css("filter", "");
});

$( "#yellow" ).mouseover(function() {
  $( ".yellow:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 yellow)"});
});


$( "#yellow" ).mouseout(function() {
  $( ".yellow ~ img" ).css("filter", "");
});

$( "#pink" ).mouseover(function() {
  $( ".pink:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 pink)"});
});


$( "#pink" ).mouseout(function() {
  $( ".pink ~ img" ).css("filter", "");
});

$( "#purple" ).mouseover(function() {
  $( ".purple:hover ~ img" ).css({"filter": "opacity(.5) drop-shadow(0 0 0 purple)"});
});


$( "#purple" ).mouseout(function() {
  $( ".purple ~ img" ).css("filter", "");
});

$( "#black" ).mouseover(function() {
  $( ".black:hover ~ img" ).css({"filter": "opacity(1) drop-shadow(0 0 0 black)"});
});


$( "#black" ).mouseout(function() {
  $( ".black ~ img" ).css("filter", "");
});

$( "#silver" ).mouseover(function() {
  $( ".silver:hover ~ img" ).css({"filter": "opacity(.2) drop-shadow(0 0 0 white)"});
});


$( "#silver" ).mouseout(function() {
  $( ".silver ~ img" ).css("filter", "");
});

    });  // eND OF doc READY