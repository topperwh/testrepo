<!DOCTYPE html>
<html lang="en">
<head>
	<?php include "partials/head.php"; ?>
</head>

<body>

	<?php include "partials/nav.php"; ?>
	<div class="divider"></div>

		<h2 class="my-4">Facebook Log-in test:</h2>
		<div class="container">
            <div class="col-md-4 col-md-offset-4 col-sm-6">
                <div role="form" id="signup-form">
                    <div class="form-group">
                        <label> Email </label>
                        <input type="email" id="form-email" 
                            class="form-control" placeholder="Enter Email">
                    </div>
                    <div class="form-group">
                        <label> Password </label>
                        <input type="password" id="form-password" 
                            class="form-control" placeholder="Password">
                    </div>
                    <input type="submit" id="signup" 
                        class="btn btn-primary" value="Sign Up" 
                        onclick="handleSignUp();">

                        <input type="submit" id="signin" class="btn btn-primary" value="Sign In" 
                        onclick="handleSignIn();">

                        <input type="submit" id="fb" 
                        class="btn btn-primary" value="Facebook" 
                        onclick="handleFBLogin();">
        			</div>
                </div>
            </div>
 		
        <div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=222324748305030';
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>


		<script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
		<script>
		  // Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyAtAliltYFM_N3UT_bcQNBeaQVaC2_kYFE",
		    authDomain: "topper-d7a58.firebaseapp.com",
		    databaseURL: "https://topper-d7a58.firebaseio.com",
		    projectId: "topper-d7a58",
		    storageBucket: "topper-d7a58.appspot.com",
		    messagingSenderId: "591363938196"
		  };
		  firebase.initializeApp(config);
		</script>

	<div class="divider"></div>
	<script src="js/login_handler.js"></script>  
    <?php include "partials/footer.php"; ?>

</body>
</html>