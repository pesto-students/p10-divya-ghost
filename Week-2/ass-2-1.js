function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (password != confirmPassword) {
      document.getElementById("password-match").innerHTML = "Passwords do not match!";
    } else {
      document.getElementById("password-match").innerHTML = "";
    }
  }
  
  document.getElementById("confirm-password").addEventListener("keyup", checkPasswordMatch);
