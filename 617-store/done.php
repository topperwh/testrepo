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
  
  <div class="container">
    <div class="col-md-12 col-sm-12">
            <div class="divider"></div>
                <h1 class="mt-5">Thank you so much <br>for shopping with us</h1><br>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <h3>We’re glad that you found what you were looking for. It is our goal that you are always happy with what you bought from us, so please let us know if your buying experience was anything short of excellent.</h3>
            <div class="divider"></div>
            <button onclick="location.href='<?php echo $index; ?>';" class="btn btn-square">Back to main</button>
          
  </div>

      <div class="divider"></div><br><div class="divider"></div><br><div class="divider"></div>
      <br><div class="divider"></div>

  </div>
</div>
</div>

  <?php include "partials/footer.php"; ?>

</body>
</html>