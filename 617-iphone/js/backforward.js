$( document ).ready(function() {


	$( "#forward1" ).click(function() {

		$(".panel1").fadeOut(500);
$(".panel2").fadeIn(2000);

}); 

	$( "#forward2" ).click(function() {

		$(".panel2").fadeOut(500);
$(".panel3").fadeIn(2000);

// if (localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == '') {
// $('#dressdrop, .dresslenght').css("top", "");
//        $('#dressdrop, .dresslenght').css("left", "");
// $('#dressdrop,#dressslide').fadeIn(600);
// localStorage.setItem('skirt', '1');

//               console.log('SKirt set to number 1');


// console.log('Skirt Reapearing');

// }

}); 

	$( "#backward1" ).click(function() {

		$(".panel2").fadeOut(500);
$(".panel1").fadeIn(2000);

}); 

	$( "#backward2" ).click(function() {

		$(".panel3").fadeOut(500);
$(".panel2").fadeIn(2000);

}); 

	$( "#backward3" ).click(function() {

		$(".panel4").fadeOut(500);
$(".panel3").fadeIn(2000);

}); 

if (localStorage.getItem('neck') == null || localStorage.getItem('neck') == '') {
$('#forward1').css("display", 'none');

}

if (localStorage.getItem('dress') == null || localStorage.getItem('dress') == '') {
$('#forward2').css("display", 'none');


}

if (localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == '') {
$('#forward2').css("display", 'none');

}













}); // End of Doc Ready