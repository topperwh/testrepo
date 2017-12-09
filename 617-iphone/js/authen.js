
function handleSignUp() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

    if(email.length < 4) {
        alert('Please enter a valid email');
        return;
    }
    if(password.length < 4) {
        alert('Please enter a stronger password ');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function() {
                alert('Signed up! Please Click Sign In to continue');
            })
            .catch(function(error){
                alert(error.message);
            })
}

function handleSignIn() {
  var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function() {
                window.location.href="http://topperwh.webhostingforstudents.com/617-iphone/billing.php"  
            })
            .catch(function(error){
                alert(error.message);
            })

}

function handleSignOut() {
    firebase.auth().signOut().then(function() {
        alert('Signed Out');
        clear();
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    
}
function clear() {
    document.getElementById('form-email').value = "";
    document.getElementById('form-password').value = "";
}

function handleFBLogin() {

    if(!firebase.auth().currentUser){
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
                .then(function(result){
                    var token = result.credential.accessToken;
                    var user = result.user;
                    alert(user.email);
                    window.location.href="http://topperwh.webhostingforstudents.com/617-iphone/billing.php"
                })
                .catch( 
                    function(error){
                        alert(error.message);
                });
    }
    else {
            handleSignOut();
            alert("User is already signed in");
    }
}