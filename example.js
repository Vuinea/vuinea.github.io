function toggleVisibility(id) {
  let display = document.getElementById(id).style.display; 
  if (display == "none") {
    document.getElementById(id).style.display = "block"; 
    document.getElementById("button-" + id).textContent = "See Less"
  } else {
    document.getElementById(id).style.display = "none";
    document.getElementById("button-" + id).textContent = "Learn More"
  }
}