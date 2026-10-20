// Initialize Lucide icons
lucide.createIcons();

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Handle scroll for sticky navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    
    if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    
    lucide.createIcons();
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay based on index for staggered animation
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0)';
            }, index * 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
fadeElements.forEach(element => {
    observer.observe(element);
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    
    // Simulate form submission (replace with your actual API call)
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        btnText.textContent = 'Message Sent!';
        formStatus.textContent = 'Thanks for reaching out! I\'ll get back to you soon.';
        formStatus.className = 'form-status success';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            formStatus.className = 'form-status';
        }, 3000);
        
    } catch (error) {
        // Error handling
        btnText.textContent = 'Send Message';
        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
        formStatus.className = 'form-status error';
        submitBtn.disabled = false;
        
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 3000);
    }
    
    // Reinitialize icons
    lucide.createIcons();
});

// ===== FOOTER YEAR =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== PARALLAX EFFECT FOR HERO =====
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content, .hero-visual');
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== ACTIVE NAVIGATION LINK =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ===== TYPING EFFECT FOR HERO (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== CURSOR FOLLOW EFFECT (Optional Enhancement) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;
let cursorCurrentX = 0;
let cursorCurrentY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function animateCursor() {
    // Smooth cursor follow
    const dx = cursorX - cursorCurrentX;
    const dy = cursorY - cursorCurrentY;
    
    cursorCurrentX += dx * 0.1;
    cursorCurrentY += dy * 0.1;
    
    cursor.style.left = cursorCurrentX + 'px';
    cursor.style.top = cursorCurrentY + 'px';
    
    requestAnimationFrame(animateCursor);
}

// Add cursor styles dynamically
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-secondary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.5;
        transition: transform 0.2s ease;
        display: none;
    }
    
    @media (min-width: 768px) {
        .custom-cursor {
            display: block;
        }
    }
    
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor {
        transform: scale(1.5);
        opacity: 1;
    }
`;
document.head.appendChild(cursorStyle);

// Start cursor animation
animateCursor();

// ===== PROJECT CARD TILT EFFECT (Optional Enhancement) =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== SCROLL PROGRESS INDICATOR =====
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // Add styles
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
            z-index: 9999;
            transition: width 0.2s ease;
        }
    `;
    document.head.appendChild(progressStyle);
};

createScrollProgress();

// ===== BACK TO TOP BUTTON =====
const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i data-lucide="arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add styles
    const backToTopStyle = document.createElement('style');
    backToTopStyle.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: var(--accent-primary);
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-base);
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background-color: #0891b2;
            transform: translateY(-4px);
        }
    `;
    document.head.appendChild(backToTopStyle);
    
    // Initialize icon
    lucide.createIcons();
};

createBackToTop();

// ===== LAZY LOADING IMAGES =====
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events (if needed)
const debouncedScroll = debounce(() => {
    // Scroll-related operations
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Add keyboard navigation for interactive elements
document.querySelectorAll('.project-card, .skill-badge, .experience-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// ===== THEME TOGGLE (Optional Feature) =====
const createThemeToggle = () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    navbar.querySelector('.nav-container').appendChild(themeToggle);
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        icon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
        lucide.createIcons();
    });
    
    // Add styles
    const themeStyle = document.createElement('style');
    themeStyle.textContent = `
        .theme-toggle {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-base);
        }
        
        .theme-toggle:hover {
            color: var(--accent-secondary);
        }
        
        [data-theme="light"] {
            --bg-primary: #ffffff;
            --bg-secondary: rgba(0, 0, 0, 0.05);
            --bg-card: rgba(0, 0, 0, 0.03);
            --border-color: rgba(0, 0, 0, 0.1);
            --text-primary: #0a0a0f;
            --text-secondary: #6b7280;
        }
    `;
    document.head.appendChild(themeStyle);
    
    lucide.createIcons();
};

// Uncomment to enable theme toggle
// createThemeToggle();

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #06b6d4; font-weight: bold;');
console.log('%cThanks for checking out the code!', 'font-size: 14px; color: #9ca3af;');
console.log('%cWant to work together? Let\'s connect!', 'font-size: 14px; color: #22d3ee;');

// ===== INIT =====
// Initialize all icons after page load
window.addEventListener('load', () => {
    lucide.createIcons();
    
    // Remove loading animation if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// Refresh icons periodically (useful for dynamic content)
setInterval(() => {
    lucide.createIcons();
}, 1000);
