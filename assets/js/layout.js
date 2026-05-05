/**
 * CRCIV Layout Manager
 * Handles dynamic injection of Header, Footer, and Navigation.
 * Automatically handles path resolution for subdirectories.
 */

document.addEventListener('DOMContentLoaded', () => {
    const prefix = getPathPrefix();
    
    injectSearchCSS(prefix);
    injectHeader(prefix);
    injectFooter();
    injectSearchOverlay(prefix);
    handleActiveNav();
    initMobileMenu();
    handleScrollHeader();
    initTheme();
});

function injectSearchCSS(prefix) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = prefix + 'assets/css/search.css';
    document.head.appendChild(link);
}

function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/blog/')) return '../';
    return '';
}

function injectHeader(prefix) {
    const header = document.querySelector('header');
    if (!header) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const info = labInfo.get();
    
    let navItemsHtml = info.nav.map(link => {
        const url = (link.url === 'index.html' && prefix === '') ? 'index.html' : prefix + link.url;
        const isActive = (currentPath === link.url) ? 'active' : '';
        return `<li><a href="${url}" class="${isActive}">${link.name}</a></li>`;
    }).join('');

    header.innerHTML = `
        <div class="logo">
            <a href="${prefix}index.html">${info.abbreviation.replace(/IV$/, '')}<span>IV</span></a>
        </div>
        
        <nav id="main-nav">
            <ul>
                ${navItemsHtml}
            </ul>
        </nav>
        
        <div class="header-tools">
            <button class="tool-btn" id="search-toggle" title="Search"><i class="fas fa-search"></i></button>
            <button class="tool-btn" id="theme-toggle" title="Toggle Dark Mode"><i class="fas fa-moon"></i></button>
            <button class="tool-btn" id="lang-toggle" title="Switch Language">${labInfo.currentLang === 'ko' ? 'EN' : 'KR'}</button>
            
            <div class="mobile-toggle" id="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    // Add Tool Listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('lang-toggle').addEventListener('click', switchLanguage);
    document.getElementById('search-toggle').addEventListener('click', openSearch);
}

function injectSearchOverlay(prefix) {
    const overlay = document.createElement('div');
    overlay.id = 'search-overlay';
    overlay.className = 'search-overlay';
    overlay.innerHTML = `
        <div class="search-modal">
            <div class="search-header">
                <i class="fas fa-search"></i>
                <input type="text" id="search-input" placeholder="Search posts, research, etc..." autocomplete="off">
                <button id="search-close"><i class="fas fa-times"></i></button>
            </div>
            <div id="search-results" class="search-results">
                <div class="search-placeholder">Type to search for posts...</div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    const close = document.getElementById('search-close');

    close.addEventListener('click', closeSearch);
    overlay.addEventListener('click', (e) => { if(e.target === overlay) closeSearch(); });
    
    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) {
            results.innerHTML = '<div class="search-placeholder">Type to search for posts...</div>';
            return;
        }

        if (typeof blogData === 'undefined') return;

        const filtered = blogData.filter(post => 
            post.title.toLowerCase().includes(query) || 
            post.summary.toLowerCase().includes(query) ||
            post.tags.some(t => t.toLowerCase().includes(query))
        );

        if (filtered.length > 0) {
            results.innerHTML = filtered.map(post => `
                <a href="${prefix}${post.link}" class="search-result-item">
                    <div class="res-title">${post.title}</div>
                    <div class="res-meta">${post.date} • ${post.category}</div>
                </a>
            `).join('');
        } else {
            results.innerHTML = '<div class="search-placeholder">No results found.</div>';
        }
    });
}

function openSearch() {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('search-input').focus(), 100);
}

function closeSearch() {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function injectFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    // Robust data retrieval with fallback to Korean
    let info = (labInfo && typeof labInfo.get === 'function') ? labInfo.get() : null;
    if (!info) info = (labInfo && labInfo.ko) ? labInfo.ko : {};

    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-info">
                    <p><strong>${info.name || 'CRCIV'} (${info.abbreviation || 'CRCIV'})</strong></p>
                    <p>${info.university || 'Incheon National University'}</p>
                    <p>Director: ${info.director || 'Prof. Hyung Wook Kwon'}</p>
                </div>
                <div class="footer-contact">
                    <p><i class="fas fa-map-marker-alt"></i> ${info.address || '인천광역시 연수구 하모니로 265'}</p>
                    <p><i class="fas fa-phone"></i> ${info.phone || '032-835-4428'}</p>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:${info.email || 'hwkwon@inu.ac.kr'}" style="color: white;">${info.email || 'hwkwon@inu.ac.kr'}</a></p>
                </div>
            </div>
            <div class="social-links">
                <a href="${(labInfo.social && labInfo.social.github) || '#'}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="${(labInfo.social && labInfo.social.email) || '#'}" title="Email"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} ${info.abbreviation || 'CRCIV'}. All rights reserved.</p>
            </div>
        </div>
    `;
}

function handleActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('main-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
}

function handleScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
