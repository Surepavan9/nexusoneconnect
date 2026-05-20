// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Modal Functionality
const modal = document.getElementById('inquiryModal');
const inquiryBtn = document.getElementById('inquiryBtn');
const heroInquiryBtn = document.getElementById('heroInquiryBtn');
const ctaInquiryBtn = document.getElementById('ctaInquiryBtn');
const closeModal = document.getElementById('closeModal');

// Open modal
function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (inquiryBtn) {
    inquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
}

if (heroInquiryBtn) {
    heroInquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
}

if (ctaInquiryBtn) {
    ctaInquiryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Form Submission - Integrated with Google Forms
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Google Apps Script Web App URL
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbytodlmlL504ytuq9wwmfaDyCSTZ6ETwBoLSIXQkBfXcPaOslIuQmNFwiLpYdGrgk2Uuw/exec';

        // Get form values as JSON object
        const formData = {
            name: inquiryForm.querySelector('[name="name"]').value,
            email: inquiryForm.querySelector('[name="email"]').value,
            phone: inquiryForm.querySelector('[name="phone"]').value,
            company: inquiryForm.querySelector('[name="company"]').value,
            website: inquiryForm.querySelector('[name="website"]').value,
            service: inquiryForm.querySelector('[name="service"]').value,
            message: inquiryForm.querySelector('[name="message"]').value
        };

        // Submit to Google Apps Script
        fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Show success message
                alert('Thank you for your inquiry! We will get back to you within 24 hours.');

                // Reset form and close modal
                inquiryForm.reset();
                closeModalFunc();
            } else {
                alert('There was an error submitting your form. Please try again or contact us directly.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again or contact us directly.');
        });
    });
}

// Contact Page Form Submission - Integrated with Google Forms
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Google Apps Script Web App URL
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbytodlmlL504ytuq9wwmfaDyCSTZ6ETwBoLSIXQkBfXcPaOslIuQmNFwiLpYdGrgk2Uuw/exec';

        // Get form values as JSON object
        const formData = {
            name: contactForm.querySelector('[name="name"]').value,
            email: contactForm.querySelector('[name="email"]').value,
            phone: contactForm.querySelector('[name="phone"]').value,
            company: contactForm.querySelector('[name="company"]').value,
            website: contactForm.querySelector('[name="website"]').value,
            service: contactForm.querySelector('[name="service"]').value,
            message: contactForm.querySelector('[name="message"]').value
        };

        // Submit to Google Apps Script
        fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Show success message
                alert('Thank you for contacting us! We will get back to you within 24 hours.');

                // Reset form
                contactForm.reset();
            } else {
                alert('There was an error submitting your form. Please try again or contact us directly.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again or contact us directly.');
        });
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.feature-card, .service-card, .benefit-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Update copyright year dynamically
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(el => {
        el.innerHTML = `&copy; ${currentYear} Nexusone Connect. All rights reserved.`;
    });
});

