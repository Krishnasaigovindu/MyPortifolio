const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle Nav
burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close nav when clicking a link (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove class to re-animate when scrolling up
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section-title, .about-text, .timeline-item, .skill-category, .project-card, .cert-item');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});
