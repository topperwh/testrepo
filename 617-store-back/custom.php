<!DOCTYPE html>
<html lang="en">
<head>
	<?php include "partials/head.php"; ?>
	<link rel="stylesheet" href="css/slider.css">

	<!-- SpecialSheet -->
	<link rel="stylesheet" href="custom_files/jquery-ui.css">
	<script src="custom_files/jquery.min.js"></script>
	<script src="custom_files/bootstrap.bundle.min.js"></script>
  	<script src="custom_files/jquery-ui.js"></script>
  	<script src="custom_files/jquery.ui.touch-punch.min.js"></script> 
	<!-- End -->
</head>

<body>

	<?php include "partials/nav.php"; ?>
	<div class="divider"></div>
  	<div class="stripe"></div>

	<div class="row">
		<div class="col-md-2 col-sm-12">
        </div>
        <div class="col-md-3 col-sm-12 cl1">

        <div id="droppable" class="displayleft">
	        <div id="dressdrop" style="position: absolute; top: 195px; left: 205px; width: 40px; height: 40px; z-index: 5;">
	        </div>
		</div>
			<div class="dresslenght">
	        	<img id="dressslide" class="mini" src="custom_files/mini.png"> 
	        </div>
			<div id="neckdrop" class="neckdrop"></div>
	        <div class="holdercustom"></div>
        </div>






        <div class="col-md-5 col-sm-12 cr1">
        	
        	<div class="textinbox">
	        	<h1>Make it yours....</h1>
				<p>Designing a new dress has never been easy like this before.</p>
				
				<br>
				<div class="panel">
					<div class="toppanel">
						<p class="navpanel">Neckline</p>
					</div>
					<div class="custombar">
						<!-- Add -->
					 	<br>
					    <div id="thumbnails">
						<div class="thumboutside" id="click1"><img id="neck1" class="thumb" src="custom_files/neck1.png"></div>
						<div class="thumboutside" id="click2"><img id="neck2" class="thumb" src="custom_files/neck2.png"></div>  
						<div class="thumboutside" id="click3"><img id="neck3" class="thumb" src="custom_files/neck3.png"></div>  
						<br>
						<br>
						</div>
					</div>
				</div>
				<br>
				<div class="panel">
					<div class="toppanel">
						<p class="navpanel">Fabrics</p>
					</div>
					<div class="custombar">
						<!-- Add -->
					 	<br>
					    <div id="thumbnails">
						<div id="draggable1" class="thumboutside2"><img class="dress1" src="custom_files/dress1.jpg"></div>
						<div id="draggable2" class="thumboutside2"><img class="dress2" src="custom_files/dress2.jpg"></div>  
						<div id="draggable3" class="thumboutside2"><img class="dress3" src="custom_files/dress3.jpg"></div>   
						<br>
						<br>
						</div>
					</div>
				</div>
				<br>
				<div class="panel">
					<div class="toppanel">
						<p class="navpanel">Dress Lenght</p>
					</div>
					<div class="custombar">
							<!-- Add -->
						 	<br>
						    <div id="sliderSelect">
							<h2 id="secondh3">Slide for Dress Length</h2>
								<div id="flat-slider" class="flat-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
								  <div tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></div>
								</div>
							</div>
					</div>
				</div>
				<br>
				<div class="panel">
					<div class="toppanel">
						<p class="navpanel">Color</p>
					</div>
					<div class="custombar">
							<input id="red" class='red' name='color' type='radio' />
							  <input id="green" class='green' name='color' type='radio' />
							  <input id="pink" class='pink' name='color' type='radio' />
							  <input id="yellow" class='yellow' name='color' type='radio' />
							  <input id="purple" class='purple' name='color' type='radio' />  
							  <input id="black" class='black' name='color' type='radio' />  
							  <input id="silver" class='silver' name='color' type='radio' />  
							  <img src="custom_files/mini.png" style="width: 150px; height: 165px;" />
					</div>
				</div>
          	</div>

          		


		</div>
		<div class="col-md-2 col-sm-12">
        </div>




	</div>
	
		<div class="divider"></div>
	</div>
	    <?php include "partials/footer.php"; ?>
	    <script src="js/neck.js"></script>  
	    <script src="js/drag.js"></script> 
	    <script src="js/slider.js"></script>
	
</body>
</html>