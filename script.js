var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// Create a function to show the currently selected gradient
function setGradient() {
 body.style.background = 
 "linear-gradient(to right, " 
 + color1.value 
 + ", " 
 + color2.value 
 + ")";
 css.textContent = body.style.background + ";";
}
// Add Event listener to set gradient for both inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);