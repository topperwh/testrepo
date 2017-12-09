<!DOCTYPE html>
<html lang="en">
<head>
	<?php include "partials/head.php"; ?>
	<link rel="stylesheet" href="css/index-bg.css?rand=<?php echo rand()%1000;?>">
</head>
<body>

	<?php include "partials/nav.php"; ?>
	<div class="divider"></div>
  <div class="stripe"></div>

  <div class="row">
        <div class="col-md-6 col-sm-12 l1">
          <div class="divider"></div>
            <div class="textinbox">
              <h1 class="mt-5">WELCOME TO <br>Le SHOP</h1>
              <br>
                <p>The newest way <br> to shop for <br>custom clothing.</p>
                <button onclick="location.href='<?php echo $concept; ?>'" class="btn btn-square">Learn More!</button>
            </div>
         
          <div class="divider2"></div>
           </div>
        <div class="col-md-6 col-sm-12 r1 ">
          <div class="placeholder"></div>
        </div>
  </div>

  <div class="row">
        <div class="col-md-6 col-sm-12 l2">
          <div class="placeholder"></div>
          </div>
        <div class="col-md-6 col-sm-12 r2">
            <div class="textinbox">
              <h1 class="mt-5">customize <br>
              neckline <br>
              skirt length <br>
              color, and fabric.</h1>
              <br>
                <button onclick="location.href='<?php echo $concept; ?>'" class="btn btn-square">Start Customizing</button>
            </div>
            <div class="divider"></div>
        </div>
  </div>

  <div class="row">
        <div class="col-md-3 col-sm-3 l31">
        </div>

        <div class="col-md-3 col-sm-3 l32">
              <div class="textinbox2">
              <h1 class="mt-5 minitext">Find your look</h1>
              <br>
                <button onclick="location.href='<?php echo $collection; ?>'" class="btn btn-square">Discovery our style</button>
              </div>
                <div class="divider"></div><br>
                <div class="divider"></div><br>
                <div class="divider"></div>
        </div>

        <div class="col-md-6 col-sm-6 r3">
          <div class="placeholder"></div>
        </div>
  </div>


  <?php include "partials/footer.php"; ?>

</body>
</html>