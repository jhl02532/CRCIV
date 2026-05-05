/**
 * CRCIV Main JavaScript
 * Handles scroll animations, header styling, and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.add('scrolled'); // Force initial check
            header.classList.remove('scrolled');
        }
    });
    
    // Trigger scroll event on load to set initial state
    window.dispatchEvent(new Event('scroll'));

    // 2. Highlight Active Nav Link based on URL
    const currentLocation = location.href;
    const navItems = document.querySelectorAll('nav a');
    const navLength = navItems.length;
    
    for (let i = 0; i < navLength; i++) {
        if (currentLocation.includes(navItems[i].getAttribute('href')) && navItems[i].getAttribute('href') !== "index.html#home") {
            navItems[i].classList.add("active");
        }
    }
    // Specific logic for index page
    if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
        navItems[0].classList.add("active");
    }

    // 3. Intersection Observer for Fade-Up Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Apply fade-up to standard elements that don't already have it
    const animateElements = document.querySelectorAll('.card, .pub-item, .research-area, .member-card, .info-item, .contact-form, .stat-item');
    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 5. Publications Filtering is handled inline in publications.html

    // 6. Contact Form Event
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 1000);
        });
    }

});
