function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var authorised;

  if (
    (username === "vanshp" && password === "25042010") ||
    (username === "kamleshp" && password === "9904072513") ||
    (username === "bhartip" && password === "9723386585") ||
    (username === "ADMIN" && password === "vansh25042010")
  ) {
    authorised = true;
  } else {
    authorised = false;
    alert("Sorry, username or password is incorrect.");
  }

  if (authorised) {
    // ✅ Redirect without alert
    window.location.href = "generalsite.html";
  }
}

