// Navbar and menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const header = document.querySelector('header');
    const navBar = document.querySelector('.navBar');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        const isMenuToggle = target.closest('#menuToggle');
        const isMenu = target.closest('#menu');
        const isNavBar = target.closest('.navBar');

        if (!isMenuToggle && !isMenu && !isNavBar) {
            menu.classList.remove('active');
        }
    });

    // Initialize theme
    initializeTheme();
});

// Typing animation
const typed = new Typed('.auto-type', {
    strings: ['Data Analyst', 'Business Analyst','Software Engineer', 'Web Developer'],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true
});

// Theme functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
} 