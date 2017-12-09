<!DOCTYPE html>
<html lang="en">
<head>
	<?php include "partials/head.php"; ?>
</head>

<body>

	<?php include "partials/nav.php"; ?>
	<div class="divider"></div>
	<br>
	<div class="container">
	<h2 class="my-4"> Payment </h2>
	
        <form action="" method="POST" id="payment-form">
            <span class="payment-errors"></span>
            <div class="form-row">
                <label>
                    <span>Card Number</span>
                    <input type="text" size="20" data-stripe="number" />
                </label>
            </div>
            <div class="form-row">
                    <label>
                        <span>CVC</span>
                        <input type="text" size="4" data-stripe="cvc" />
                    </label>
            </div>
            <div class="form-row">
                    <label>
                        <span>Expiration (MM/YYYY)</span>
                        <input type="text" size="2" data-stripe="exp-month" />
                    </label>
                    <span> / </span>
                    <input type="text" size="4" data-stripe="exp-year" />
            </div>
            <button type="submit">Submit Payment</button>
        </form>

    </div>
	<div class="divider"></div>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	 <script type="text/javascript" src="https://js.stripe.com/v1/"></script>
	 <script type="text/javascript" src="js/stripe.js"></script>
	 

</body>
	
	<?php include "partials/footer.php"; ?>


	

</html>