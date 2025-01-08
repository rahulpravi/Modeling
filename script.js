function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
// Scroll Animation
const aboutSection = document.querySelector('.about-section');
window.addEventListener('scroll', () => {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
    } else {
        aboutSection.style.opacity = '0';
        aboutSection.style.transform = 'translateY(20px)';
    }
});
// Scrolling Animation for Portfolio Section
const portfolioSection = document.querySelector('.portfolio-section');
window.addEventListener('scroll', () => {
    const sectionPos = portfolioSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        portfolioSection.classList.add('visible');
    } else {
        portfolioSection.classList.remove('visible');
    }
});

// Lightbox Functionality
const portfolioItems = document.querySelectorAll('.portfolio-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close');

portfolioItems.forEach((item) => {
    item.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = item.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
// Select all service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add scroll event listener
window.addEventListener('scroll', () => {
    serviceCards.forEach((card, index) => {
        const cardPos = card.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        // Add a slight delay for each card
        if (cardPos < screenPos) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100); // Delay increases with each card
        } else {
            card.classList.remove('visible'); // Reset animation when out of view
        }
    });
});

// Scrolling Animation for Contact Form
const contactForm = document.querySelector('.contact-form');
window.addEventListener('scroll', () => {
    const formPos = contactForm.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (formPos < screenPos) {
        contactForm.classList.add('visible');
    } else {
        contactForm.classList.remove('visible');
    }
});