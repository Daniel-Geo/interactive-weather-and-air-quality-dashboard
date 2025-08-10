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
document.getElementById('sm-m').addEventListener('click', function() {
    document.getElementById('ul').classList.toggle('show');
});
setTimeout(() => {
    console.log("Hiding loader now...");
    document.getElementById("loader").style.display = "none"
}, 3000);
let quote = document.getElementById("quote");
let author = document.getElementById("author");
const url = "https://quoteslate.vercel.app/api/quotes/random";

let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = "“" + item.quote + "” - ";
            author.innerText = item.author;
        });
};

window.addEventListener("load", getQuote);
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const contactData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        message: document.getElementById("message").value
    };
    localStorage.setItem("contactInfo", JSON.stringify(contactData));
    alert("We recive your message, we will contact you soon");
});