// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// TYPING EFFECT
const texts = [
  "Aspiring Data Scientist & ML Developer",
  "Building AI-Powered Smart Applications",
  "Python | Flask | OpenCV | Analytics"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === texts.length){
    count = 0;
  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

  }

  setTimeout(type, 100);

})();

// MOBILE NAVBAR
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// SCROLL PROGRESS
window.addEventListener("scroll", () => {

  let scrollTop = document.documentElement.scrollTop;

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar")
    .style.width = progress + "%";

});

// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(name === "" || email === ""){

    alert("Please fill all required fields.");

  }else{

    alert("Message sent successfully!");
    form.reset();

  }

});