const encodedPassword = "c3Byb3dudG93bjE0ODM="; // "sprowntown1483" in base64
const correctPassword = atob(encodedPassword);

// Check if password has already been entered in this session
if (sessionStorage.getItem("weddingPassword") !== correctPassword) {
  let entered = null;

  // Keep prompting until the correct password is entered
  while (entered !== correctPassword) {
    entered = prompt("Enter the password to view this site:")?.trim();
    if (entered === null) {
      alert("You must enter the password to view the site.");
    }
  }

  // Save in sessionStorage so other pages in this tab won't ask again
  sessionStorage.setItem("weddingPassword", correctPassword);
}

// Fade-in
document.body.style.display = "block";
setTimeout(() => {
  document.body.style.opacity = "1";
}, 50);
