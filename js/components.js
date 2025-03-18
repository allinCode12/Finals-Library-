// Function to load HTML components
function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Initialize navigation after header is loaded
            if (elementId === 'header') {
                initializeNavigation();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Function to toggle mobile navigation
function toggleMobileNav() {
    const nav = document.querySelector('.site-header__nav');
    nav.classList.toggle('site-header__nav--open');
    const toggleBtn = document.querySelector('.site-header__menu-toggle');
    toggleBtn.classList.toggle('active');
}

// Function to initialize navigation
function initializeNavigation() {
    const menuToggle = document.querySelector('.site-header__menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileNav);
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    if (document.getElementById('header')) {
        loadComponent('header', '../components/header.html');
    }
    
    // Load footer
    if (document.getElementById('footer')) {
        loadComponent('footer', '../components/footer.html');
    }
});