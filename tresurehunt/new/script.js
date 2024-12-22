// script.js

// Predefined password for logout
const correctPassword = "ken2024";

// Start the application: Enter fullscreen, show logout button, and block shortcuts
function startApp() {
    const element = document.documentElement; // The entire document

    // Enter fullscreen mode
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }

    // Hide Start button, show Logout button, update message
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "inline-block";
    document.getElementById("message").innerText = "The application is locked. Logout to exit.";

    // Block shortcuts
    document.addEventListener("keydown", blockShortcuts);
}

// Show the password dialog when trying to logout
function logoutApp() {
    document.getElementById("password-dialog").style.display = "block";
}

// Validate the entered password and exit fullscreen if correct
function validatePassword() {
    const inputPassword = document.getElementById("password").value;

    if (inputPassword === correctPassword) {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }

        // Reset UI
        document.getElementById("start-btn").style.display = "inline-block";
        document.getElementById("logout-btn").style.display = "none";
        document.getElementById("message").innerText = "You have logged out. Click Start to lock again.";
        document.getElementById("password-dialog").style.display = "none";

        // Unblock shortcuts
        document.removeEventListener("keydown", blockShortcuts);
    } else {
        console.log("Incorrect password. Try again.");
        document.getElementById("password").value = ""; // Clear input field
    }
}

// Block specific shortcuts like Ctrl+P, Ctrl+S, Ctrl+Shift+I, and F12
function blockShortcuts(event) {
    // Block specific keys
    if (
        (event.ctrlKey && event.key === "p") || // Ctrl+P
        (event.ctrlKey && event.key === "s") || // Ctrl+S
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
        (event.key === "F12") // F12
    ) {
        event.preventDefault();
        alert("This shortcut is disabled.");
    }

    // Disable Ctrl+Shift+J or Ctrl+U for viewing source
    if ((event.ctrlKey && event.shiftKey && event.key === "J") || (event.ctrlKey && event.key === "u")) {
        event.preventDefault();
        alert("Viewing source is disabled.");
    }
}
