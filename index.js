function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var authorised;

  if (
    (username === "vanshp" && password === "294") ||
    (username === "kamleshp" && password === "") ||
    (username === "bhartip" && password === "9723386585")
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
