document.addEventListener("DOMContentLoaded", () => {
  const encodedPassword = "c3Byb3dudG93bjE0ODM="; // "sprowntown1483" in base64
  const correctPassword = atob(encodedPassword);

  let entered = "";
  while (entered !== correctPassword) {
    entered = prompt("Enter the password to view this site:");
    if (entered === null) {
      alert("You must enter the password to view the site.");
    }
  }

  // Fade-in effect
  document.body.style.display = "block";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 50);
});
