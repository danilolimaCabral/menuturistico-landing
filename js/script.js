// ========================================
// SLIDER FUNCTIONALITY
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Auto-advance slider every 5 seconds
let sliderInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

function changeSlide(direction) {
    currentSlide += direction;
    
    // Loop around
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateSlider();
    
    // Reset auto-advance timer
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    
    // Reset auto-advance timer
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function updateSlider() {
    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// ========================================
// NEWSLETTER FORM
// ========================================

function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate form submission
    console.log('Newsletter signup:', email);
    
    // Show success message
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Inscrição realizada!';
    button.style.background = '#22c55e';
    
    // Reset form
    form.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
}

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for valid section links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.style.background = 'linear-gradient(to bottom, rgba(0, 26, 77, 0.98), rgba(0, 26, 77, 0.95))';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0, 26, 77, 0.95), rgba(0, 26, 77, 0.8))';
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ========================================
// BUTTON INTERACTIONS
// ========================================

// Add click handlers to all buttons
document.querySelectorAll('.btn-card').forEach(button => {
    button.addEventListener('click', function() {
        const cardTitle = this.closest('.card').querySelector('.card-title').textContent;
        console.log('Clicked:', cardTitle);
        
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// ========================================
// GALLERY LIGHTBOX (Optional Enhancement)
// ========================================

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const src = img.src;
        const alt = img.alt;
        
        // You can implement a lightbox here
        console.log('Gallery item clicked:', alt);
    });
});

// ========================================
// MOBILE MENU TOGGLE (Optional)
// ========================================

// Check if menu needs to be toggled on mobile
function handleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
    }
}

window.addEventListener('resize', handleMobileMenu);
handleMobileMenu();

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider
    updateSlider();
    
    // Log initialization
    console.log('Menu Turístico Premium - Initialized');
});
