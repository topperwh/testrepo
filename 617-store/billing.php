<!DOCTYPE html>
<html lang="en">
<head>
	<?php include "partials/head.php"; ?>
	<link rel="stylesheet" href="css/index-bg.css?rand=<?php echo rand()%1000;?>">
  <script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
</head>
<body>

	<?php include "partials/nav.php"; ?>
	<div class="divider"></div>
  <div class="stripe"></div>
  
  <div class="container">
    <div class="col-md-12 col-sm-12">
            <div class="divider"></div>
                <h1 class="mt-5">Shipping Address</h1><br>
    <div class="row">
        <div class="col-md-8 col-sm-12">
            <div>

                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                           <div class="form-group">
                               <input type="text" class="form-control input-sm" name="name" id="given-name" required placeholder="Name" autocomplete="given-name">
                          </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                            <div class="form-group">
                                <input name="lname" class="form-control input-sm" id="family-name" required placeholder="Lastname" autocomplete="family-name">
                            </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                  <input type="email" name="email" id="frmEmailA" class="form-control input-sm" placeholder="Email" required autocomplete="email">
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                            <div class="form-group">
                                <input type="tel" name="phone" id="frmPhoneNumA" class="form-control input-sm"  placeholder="Phone humber" required autocomplete="tel">
                            </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <input name="ship-address" required id="frmAddressS" class="form-control input-sm" placeholder="Address Street P.O.Box" autocomplete="shipping street-address">
                            </div>
                        </div>
                      </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-xs-12 col-sm-4 col-md-3">
                                <div class="form-group">
                                <input name="ship-city" required id="frmCityS" class="form-control input-sm" placeholder="City" autocomplete="shipping locality">
                                </div>
                        </div>

                        <div class="col-xs-12 col-sm-4 col-md-3">
                                <div class="form-group">
                        <input name="ship-state" required id="frmStateS" placeholder="State" class="form-control input-sm" autocomplete="address-level1">
                                </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-3">
                            <div class="form-group">
                                <input name="ship-zip" required id="frmZipS" placeholder="Postcode"  class="form-control input-sm" autocomplete="shipping postal-code">                 
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-3">
                            <div class="form-group">
                                <strong><p>USA</p></strong>            
                            </div>
                        </div>

                      </div>
                    </div>
                    
                  <div class="col-md-4 col-sm-12">
                    <div class="bilg">
                      <h2>Need help?</h2>
                      <h3>If you have any question or need help with your account, you may CONTACT US to assist you.<br>
                        CALL US AT<br>
                        1-855-486-4756<br>
                        Mon-Sat: 9am-12am ET<br>
                        Sun: 11am-11pm ET</h3>
                      </div>
                    </div>
                  </div>
          
  </div>
</div>
     <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
        <div class="col-md-8 col-sm-12">
                <h1 class="mt-5">Payment</h1><br>
                <form action="" method="POST" id="payment-form">
                    <span class="payment-errors"></span>
                    <div class="row">
                        <div class="form-group col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <span>Card Number</span>
                                <input name="cardnumber" required id="frmCCNum" size="20" class="form-control input-sm" required autocomplete="cc-number" data-stripe="number" />

                                <br>
                                <span>Expiration (MM/YYYY)</span><br>
                                <input type="text" size="2" class="form-control2 input-sm" data-stripe="exp-month" /> <span> / </span>
                                <input type="text" size="4" class="form-control2 input-sm" data-stripe="exp-year" /> 
                                <br><br>
                                <span>CVC</span><br>
                                    <input type="text" size="4" class="form-control2 input-sm" data-stripe="cvc" />

                                <br><br>
                                <button type="submit" class="btn btn-square">Submit Payment</button>
                            </div>
                        </div>
                      
                    </div>
                </form>
          </div>
          <div class="col-md-2 col-sm-12">
            
          </div>
          </div>
          </div>
      </div>
      <div class="divider"></div>


      

  <?php include "partials/footer.php"; ?>

</body>
<script src="https://js.stripe.com/v2/"></script>
<script>Stripe.setPublishableKey('pk_test_VbfertrReVecjmi8zz0NKzVU');
              var stripeResponseHandler = function(status, response) {
                  var $form = $('#payment-form');
                  if(response.error) {
                      $form.find('.payment-errors').text(response.error.message);
                      $form.find('button').prop('disabled', false);
                  } else {
                      var token = response.id;
                      alert(token);
                      window.location.href= '<?php echo $done; ?>';
                      //-----send the token to sever here
                  }

              }  

            jQuery(function($) {
                $('#payment-form').submit(function(e){
                     var $form = $(this);
                     $form.find('button').prop('disabled',true);
                    Stripe.card.createToken($form, stripeResponseHandler);
                    return false;
                });
            });

jQuery(function($) {
  $('#payment-form').submit(function(e){
    var $form = $(this);
    $form.find('button').prop('disabled',true);

  });
});</script>
  
</html>