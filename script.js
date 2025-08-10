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
        document.getElementById("main").style.background = "#f0f0f0";
    } else {
        isDarkMode = !isDarkMode;
        document.body.style.background = "linear-gradient(to bottom left, #1a1a1a, #333333)";
        document.body.style.color = "#f0f0f0";
        document.getElementById("dark-mode").innerHTML = "Dark mode";
        document.getElementById("dark-mode").style.color = "#f0f0f0";
        document.getElementById("dark-mode").style.background = "#1a1a1a";
        document.getElementById("main").style.background = "#1a1a1a";

    }
    document.getElementById("website-name").style.color = "white";
}


document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = "5d6d31b12ff8f2b66fe10fda00cfea69";

    // Cairo coordinates
    const cairoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=29.735762&lon=31.213338&appid=${API_KEY}&units=metric`;

    // Paris coordinates
    const parisUrl = `https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=${API_KEY}&units=metric`;

    // New York coordinates
    const newYorkUrl = `https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=${API_KEY}&units=metric`;

    // Fetch Cairo weather
    fetch(cairoUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data, "cairo");
        })
        .catch(err => {
            console.error("Error fetching Cairo weather:", err);
        });

    // Fetch Paris weather
    fetch(parisUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data, "paris");
        })
        .catch(err => {
            console.error("Error fetching Paris weather:", err);
        });

    // Fetch New York weather
    fetch(newYorkUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data, "newyork");
        })
        .catch(err => {
            console.error("Error fetching New York weather:", err);
        });
});

function displayWeatherData(data, city) {
    if (city === "cairo") {
        document.getElementById("cairo").textContent = "Cairo: " + data.main.temp + "°C";
    } else if (city === "paris") {
        document.getElementById("paris").textContent = "Paris: " + data.main.temp + "°C";
    } else if (city === "newyork") {
        document.getElementById("newyork").textContent = "New York: " + data.main.temp + "°C";
    }
}


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

setTimeout(() => {
    console.log("Hiding loader now...");
    document.getElementById("loader").style.display = "none"
}, 3000);

document.getElementById('sm-m').addEventListener('click', function() {
    document.getElementById('ul').classList.toggle('show');
});