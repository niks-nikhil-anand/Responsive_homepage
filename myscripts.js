const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-links'); // Use querySelectorAll() instead of getAnimations()

toggleButton.addEventListener('click', () => {
    // Since navLinks is a NodeList, we need to loop through the elements to toggle the class for each one
    navLinks.forEach(link => link.classList.toggle('active'));
});
