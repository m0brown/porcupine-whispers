const correctPassword = "sprowntown1483";

document.getElementById("submitPassword").addEventListener("click", function() {
  const enteredPassword = document.getElementById("passwordInput").value;
  if (enteredPassword === correctPassword) {
    sessionStorage.setItem("weddingPassword", "granted");
    window.location.href = "weddingsite.html"; // redirect to main site
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
});
