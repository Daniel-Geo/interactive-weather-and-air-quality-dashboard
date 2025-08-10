    setTimeout(() => {
        console.log("Hiding loader now...");
        document.getElementById("loader").style.display = "none"
    }, 3000);
let n = "no1"
let now = "now"
let ntnow = "nt-now"
// these variables are for the change in the hero section to have the class names and the id
function change(path, nd){
    document.getElementById("mod").setAttribute("src", path);
    // here i change the src attribute in the model viewer function to make the model change based on the click button
    document.getElementById(n).classList.remove(now);
    // here i removed the color of the item that was selected
    document.getElementById(n).classList.add(ntnow);
    // and gave it the basic class
    n = nd;
    document.getElementById(nd).classList.remove(ntnow);
    // here i removed the basic class
    document.getElementById(nd).classList.add(now);
    // here i added the special classs
    transition
}
// the small menu function
document.getElementById('sm-m').addEventListener('click', function() {
    document.getElementById('ul').classList.toggle('show');
});

// the quote generator 

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

// this is the dark mode function of the website
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

