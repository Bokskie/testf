
function loginBtn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username === "") {
      alert("Please enter your login info:\n\n" + "Enter both your username and password");

    } else if (username === "Fiona" || username.toUpperCase() === "FIONA" || username.toLowerCase() === "fiona") {

      if (password === "") {
        alert("No password:\n\n" + "Enter your password");

      } else if (password === "Paderaja") {
        alert("Successfully Login");

      } else {
        alert("Unsuccessfully Login");
      }

    } else {
      alert("Username does not match");
    }
  }
