function toggleVisibility(paragraph) { 
  let currentVisibility = document.getElementById(paragraph + "-info").style.display;
  if (currentVisibility === "none") { 
    // being able to see expanded text 
    document.getElementById(paragraph + "-info").style.display = "block";
    // changing text content of button to show see less 
    document.getElementById(paragraph + "-button").textContent = "See Less";
  } else {
    // close expanded text
    document.getElementById(paragraph + "-info").style.display = "none";
    // change text content of button show learn more 
    document.getElementById(paragraph + "-button").textContent = "Learn More";
  }
}

let modelButton = document.getElementById("model-button"); 
let codingButton = document.getElementById("coding-button"); 
let websiteButton = document.getElementById("website-button"); 

modelButton.addEventListener("click", function() {toggleVisibility("model")});
codingButton.addEventListener("click", function() {toggleVisibility("coding")});
websiteButton.addEventListener("click", function() {toggleVisibility("website")});

