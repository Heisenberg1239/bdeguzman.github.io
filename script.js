// Get all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Add event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
