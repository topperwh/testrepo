Stripe.setPublishableKey('pk_test_VbfertrReVecjmi8zz0NKzVU');
              var stripeResponseHandler = function(status, response) {
                  var $form = $('#payment-form');
                  if(response.error) {
                      $form.find('.payment-errors').text(response.error.message);
                      $form.find('button').prop('disabled', false);
                  } else {
                      var token = response.id;
                      alert(token);
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
});