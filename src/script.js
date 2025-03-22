// Wait for the DOM to load before executing the code
document.addEventListener("DOMContentLoaded", function() {
    // Update the copyright year
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    
    tabButtons.forEach(function(tabButton) {
      tabButton.addEventListener("click", function() {
        // Remove the active class from all tab buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
        // Hide all tab content sections
        tabContents.forEach(content => content.classList.remove("active"));
        
        // Activate the clicked tab button
        tabButton.classList.add("active");
        
        // Show the associated tab content based on data-target attribute
        const targetId = tabButton.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  });
  