// password.js
const PASSWORD = "sprowntown1483";

function askPassword() {
    const entered = sessionStorage.getItem("wedding_auth") 
        || prompt("Please enter the wedding password:");

    if (entered === PASSWORD) {
        sessionStorage.setItem("wedding_auth", PASSWORD);
    } else {
        alert("Incorrect password.");
        window.location.reload();
    }
}

askPassword();
