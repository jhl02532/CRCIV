/**
 * CRCIV Main JavaScript
 * Handles dynamic content rendering and scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Dynamic Content
    initDynamicContent();

    // 2. Intersection Observer for Fade-Up Animations
    initScrollAnimations();

    // 3. Smooth Scrolling for Anchor Links
    initSmoothScrolling();

    // 4. Contact Form Handler
    initContactForm();
});

/**
 * Initialize dynamic content based on the current page
 */
function initDynamicContent() {
    // Render Research Grid if on index.html
    const researchGrid = document.getElementById('research-grid');
    if (researchGrid && typeof researchData !== 'undefined') {
        researchGrid.innerHTML = researchData.map(area => `
            <a href="research.html#${area.id}" class="card-link fade-up">
                <div class="card">
                    <i class="${area.icon}"></i>
                    <h3>${area.title}</h3>
                    <p>${area.description}</p>
                </div>
            </a>
        `).join('');
    }

    // Render Research Details if on research.html
    const researchDetailsContainer = document.getElementById('research-details-container');
    if (researchDetailsContainer && typeof researchData !== 'undefined') {
        researchDetailsContainer.innerHTML = researchData.map(area => `
            <div class="research-area fade-up" id="${area.id}" style="margin-bottom: 4rem; padding: 2rem; background: var(--white); border-radius: 20px; border: 1px solid var(--border-color);">
                <div class="research-flex-container" style="display: flex; gap: 3rem; align-items: flex-start; flex-wrap: wrap;">
                    
                    <div class="research-text" style="flex: 1; min-width: 300px;">
                        <h2 style="margin-top: 0;"><i class="${area.icon}"></i> ${area.title}</h2>
                        <p class="description" style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${area.description}</p>
                        
                        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">주요 연구 내용</h3>
                        <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                            ${area.topics.map(topic => `<li style="margin-bottom: 0.5rem;">${topic}</li>`).join('')}
                        </ul>

                        <div class="key-papers" style="background: var(--bg-gray); padding: 1.2rem; border-radius: 12px; font-size: 0.85rem;">
                            <p style="font-weight: 800; color: var(--primary-color); margin-bottom: 0.8rem;">Representative Publications:</p>
                            ${area.papers.map(paper => `
                                <p style="margin-bottom: 0.4rem;">• <a href="https://doi.org/${paper.doi}" target="_blank" class="paper-link" style="color: var(--accent-color); font-weight: 600;">
                                    ${paper.title}
                                </a> (${paper.venue})</p>
                            `).join('')}
                        </div>
                    </div>

                    <div class="research-visual-side" style="flex: 0 0 350px; text-align: center;">
                        <img src="${area.image}" alt="${area.title}" style="width: 100%; height: auto; border-radius: 12px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem; font-style: italic; line-height: 1.4;">${area.imageCaption}</p>
                    </div>

                </div>
            </div>
        `).join('');
    }
}

/**
 * Initialize fade-up animations on scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Initial targets
    const animateElements = document.querySelectorAll('.card, .pub-item, .research-area, .member-card, .info-item, .contact-form, .stat-item, .fade-up');
    animateElements.forEach(el => observer.observe(el));
}

/**
 * Handle smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

/**
 * Handle contact form submission
 */
function initContactForm() {
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
}
