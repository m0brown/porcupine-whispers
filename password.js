const encodedPassword = "d2VkZGluZzIwMjU="; // "wedding2025" in base64

function decodePassword(encoded) {
  return atob(encoded);
}

const correctPassword = decodePassword(encodedPassword);

let entered = "";
while (entered !== correctPassword) {
  entered = prompt("Enter the password to view this site:");
  if (entered === null) {
    alert("You must enter the password to view the site.");
  }
}

document.body.style.display = "block";

//fade-in effect
setTimeout(() => {
  document.body.style.opacity = "1";
}, 50);
