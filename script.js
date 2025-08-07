document.getElementById("dark-mode").addEventListener("click", darkModeToggle);

let isDarkMode = false;

function darkModeToggle() {
    if (isDarkMode) {
        isDarkMode = !isDarkMode;
        document.body.style.background = "linear-gradient(to bottom left, #D1E0D7, #607EBC)";
        document.body.style.color = "#1a1a1a";
        document.getElementById("dark-mode").innerHTML = "Light mode";
        document.getElementById("dark-mode").style.color = "#1a1a1a";
        document.getElementById("dark-mode").style.background = "#f0f0f0";
    } else {
        isDarkMode = !isDarkMode;
        document.body.style.background = "linear-gradient(to bottom left, #1a1a1a, #333333)";
        document.body.style.color = "#f0f0f0";
        document.getElementById("dark-mode").innerHTML = "Dark mode";
        document.getElementById("dark-mode").style.color = "#f0f0f0";
        document.getElementById("dark-mode").style.background = "#1a1a1a";

    }
    document.getElementById("website-name").style.color = "white";
}