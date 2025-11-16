// Password for your site
const correctPassword = "sprowntown1483";

// Redirect automatically if already entered
if (localStorage.getItem("weddingAccess") === "granted") {
  window.location.href = "weddingsite.html"; // UPDATED
}

document.getElementById("submitPassword").addEventListener("click", function() {
  const enteredPassword = document.getElementById("passwordInput").value;
  if (enteredPassword === correctPassword) {
    localStorage.setItem("weddingAccess", "granted");
    window.location.href = "weddingsite.html";
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
});
