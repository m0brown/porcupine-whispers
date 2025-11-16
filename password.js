// Password for your site
const correctPassword = "sprowntown1483";

// Check if the user already entered the correct password
if (localStorage.getItem("weddingAccess") === "granted") {
  window.location.href = "wedding.html"; // redirect if already approved
}

document.getElementById("submitPassword").addEventListener("click", function() {
  const enteredPassword = document.getElementById("passwordInput").value;
  if (enteredPassword === correctPassword) {
    localStorage.setItem("weddingAccess", "granted"); // remember user
    window.location.href = "wedding.html"; // go to wedding page
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
});
