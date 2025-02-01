// Toggle the navigation menu on small screens
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scroll when navigating between sections
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
          top: targetSection.offsetTop - 20, // Scroll to section with a little offset
          behavior: 'smooth'
      });
  });
});
