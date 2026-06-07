/**
 * NEXUSONE CONNECT - MODERN ANIMATIONS
 * Enhanced interactive animations and effects
 */

// ========== PAGE LOADER ==========
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }, 800);
    }
});

// ========== SCROLL REVEAL ANIMATIONS ==========
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// ========== NAVBAR SCROLL EFFECT ==========
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ========== PARALLAX EFFECT ==========
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ========== COUNTER ANIMATION ==========
const animateCounter = (element) => {
    const target = parseInt(element.dataset.target);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

// Trigger counters when visible
const observeCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
};

document.addEventListener('DOMContentLoaded', observeCounters);

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== PARTICLE BACKGROUND ==========
const createParticles = (container, count = 50) => {
    const particlesWrapper = document.createElement('div');
    particlesWrapper.className = 'particles-bg';

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        // Random movement
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');

        particlesWrapper.appendChild(particle);
    }

    container.appendChild(particlesWrapper);
};

// Add particles to hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    createParticles(heroSection, 30);
}

// ========== CARD TILT EFFECT ==========
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ========== ENHANCED HERO BACKGROUND ELEMENTS ==========
const enhanceHeroBackground = () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Add animated grid
    const grid = document.createElement('div');
    grid.className = 'hero-grid';
    heroSection.appendChild(grid);

    // Add glowing orbs
    for (let i = 1; i <= 3; i++) {
        const orb = document.createElement('div');
        orb.className = `hero-orb hero-orb-${i}`;
        heroSection.appendChild(orb);
    }

    // Add floating geometric shapes
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'hero-shapes';

    const circle = document.createElement('div');
    circle.className = 'shape shape-circle';
    shapesContainer.appendChild(circle);

    const square = document.createElement('div');
    square.className = 'shape shape-square';
    shapesContainer.appendChild(square);

    const triangle = document.createElement('div');
    triangle.className = 'shape shape-triangle';
    shapesContainer.appendChild(triangle);

    heroSection.appendChild(shapesContainer);

    // Add light rays
    const lightRays = document.createElement('div');
    lightRays.className = 'light-rays';
    for (let i = 0; i < 5; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        lightRays.appendChild(ray);
    }
    heroSection.appendChild(lightRays);

    // Add wave SVG at bottom
    const wave = document.createElement('div');
    wave.className = 'hero-wave';
    wave.innerHTML = `
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,50 C150,20 350,80 600,50 C850,20 1050,80 1200,50 L1200,100 L0,100 Z"
                  fill="rgba(255,255,255,0.1)"
                  class="wave-path">
                <animate attributeName="d"
                         dur="10s"
                         repeatCount="indefinite"
                         values="M0,50 C150,20 350,80 600,50 C850,20 1050,80 1200,50 L1200,100 L0,100 Z;
                                 M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,100 L0,100 Z;
                                 M0,50 C150,20 350,80 600,50 C850,20 1050,80 1200,50 L1200,100 L0,100 Z"/>
            </path>
        </svg>
    `;
    heroSection.appendChild(wave);

    // Enhanced colored particles
    createColoredParticles(heroSection, 20);
};

// Create colored particles
const createColoredParticles = (container, count) => {
    const colors = [
        'rgba(34, 211, 238, 0.6)',   // Cyan
        'rgba(16, 185, 129, 0.6)',   // Emerald
        'rgba(6, 182, 212, 0.6)',    // Teal
        'rgba(20, 184, 166, 0.6)',   // Primary
        'rgba(255, 255, 255, 0.8)'   // White
    ];

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-colored';

        const size = Math.random() * 6 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

        particle.style.setProperty('--tx', (Math.random() - 0.5) * 300 + 'px');
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 300 + 'px');

        container.appendChild(particle);
    }
};

// Initialize enhanced hero on load
document.addEventListener('DOMContentLoaded', enhanceHeroBackground);

// ========== ADD ANIMATED BACKGROUNDS TO SECTIONS ==========
const addSectionBackgrounds = () => {
    // Add bubbles to What We Do section
    const whatWeDo = document.querySelector('.what-we-do');
    if (whatWeDo) {
        const bubblesContainer = document.createElement('div');
        bubblesContainer.className = 'bubbles-bg';
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubblesContainer.appendChild(bubble);
        }
        whatWeDo.appendChild(bubblesContainer);
    }

    // Add dots to Core Services section
    const coreServices = document.querySelector('.core-services');
    if (coreServices) {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'dots-bg';
        coreServices.appendChild(dotsContainer);
    }
};

document.addEventListener('DOMContentLoaded', addSectionBackgrounds);


// ========== ADD MORE FLOATING ELEMENTS TO SERVICES SECTION ==========
const addFloatingElements = () => {
    const coreServices = document.querySelector('.core-services');
    if (!coreServices) return;

    // Add floating teal orbs
    for (let i = 0; i < 3; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        orb.style.cssText = `
            position: absolute;
            width: ${100 + Math.random() * 100}px;
            height: ${100 + Math.random() * 100}px;
            background: radial-gradient(circle, rgba(20, 184, 166, 0.15), transparent);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            filter: blur(30px);
            animation: orbFloat ${15 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            z-index: 0;
        `;
        coreServices.appendChild(orb);
    }

    // Add sparkles to What We Do section
    const whatWeDo = document.querySelector('.what-we-do');
    if (whatWeDo) {
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(20, 184, 166, 0.8);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: sparkleAnimation ${2 + Math.random() * 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 0;
            `;
            whatWeDo.appendChild(sparkle);
        }
    }
};

// Sparkle animation
const addSparkleAnimation = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleAnimation {
            0%, 100% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.5);
            }
        }
    `;
    document.head.appendChild(style);
};

document.addEventListener('DOMContentLoaded', () => {
    addFloatingElements();
    addSparkleAnimation();
});

// ========== ENHANCED CARD HOVER EFFECTS ==========
const enhanceCardHovers = () => {
    const cards = document.querySelectorAll('.feature-card, .service-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(20, 184, 166, 0.3), transparent);
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;

            card.style.position = 'relative';
            card.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

document.addEventListener('DOMContentLoaded', enhanceCardHovers);

