// Wait for the DOM to be fully loaded before running the script.
document.addEventListener("DOMContentLoaded", function() {
    // Update the copyright year in the footer.
    const yearElement = document.getElementById("year");
    if (yearElement) { 
      yearElement.textContent = new Date().getFullYear();
    }
  });
  