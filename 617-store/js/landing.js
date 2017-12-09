// This code will tell the browser what panel to start with after a browser refreshes
$( document ).ready(function() {

if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
	if (localStorage.getItem('dress') !== "" && localStorage.getItem('dress') !== null) {
		if (localStorage.getItem('skirt') !== "" && localStorage.getItem('skirt') !== null){
			
       
            $('.panel4').fadeIn(2000);
            $('.panel4').addClass('active');
            console.log('Welp');

        
}
}
}

// if () {
// 	if () {
// 		if (){
			
       
//             $('.panel1').fadeIn(2000);
//             $('.panel1').addClass('active');
//             console.log('Welp2');

        
// }
// }
// }
//  Goes to Color Picker
if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
	if (localStorage.getItem('dress') !== "" && localStorage.getItem('dress') !== null) {
		if (localStorage.getItem('skirt') == "" || localStorage.getItem('skirt') == null){
			
       
            $('.panel2').fadeIn(2000);
            $('.panel2').addClass('active');

        
}
}
} //Goes to Skirt Length

if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
		if (localStorage.getItem('dress') == "" ||  localStorage.getItem('dress') == null){
			
            $('.panel2').fadeIn(2000);
            $('.panel2').addClass('active');

        
}
} //Goes to Skirt Length


if (localStorage.getItem('neck') == "" || localStorage.getItem('neck') == null) {
       
            $('.panel1').fadeIn(2000);
            $('.panel1').addClass('active');

}




}); // End of Doc Ready