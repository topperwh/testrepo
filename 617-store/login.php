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
    <div class="row">
        <div class="col-md-12 col-sm-12">
        <div class="divider"></div>
            <h1 class="mt-5">Create an account</h1><br>
        </div>
              <div class="col-md-6 col-sm-12">
              <p><strong>Existing Le Shop customer </strong><br> Enter your e-mail address and password to log in.</p>
              <div class="row">
                  <div class="col-md-8 col-sm-12">
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
                            class="btn btn-square" value="Sign Up" 
                            onclick="handleSignUp();">

                            <input type="submit" id="signin" class="btn btn-square" value="Sign In" 
                            onclick="handleSignIn();">
                    </div>
                    </div>
                  </div>
            </div>
    
        <div class="col-md-6 col-sm-12 chr1">
          <p><strong>Facebook Connect</strong><br>Facebook Login is a secure, fast and convenient way for you to log into our Le Shop.</p>
          <div role="form" id="signup-form">
            <input type="submit" id="fb" 
            class="btn btn-square" value="Facebook" 
            onclick="handleFBLogin();">

          </div>
        </div>

        </div>
        <div class="divider"></div>
           </div>
  </div>

  <?php include "partials/footer.php"; ?>

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

  <script src="js/authen.js"></script>
  

</body>
</html>