// Image carousel functionality
class ProductCarousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.images = carouselElement.querySelectorAll('.product-image');
        this.prevBtn = carouselElement.querySelector('.prev');
        this.nextBtn = carouselElement.querySelector('.next');
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Hide navigation if only one image
        if (this.images.length <= 1) {
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
            return;
        }
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());
        
        // Add keyboard navigation
        this.carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevImage();
            if (e.key === 'ArrowRight') this.nextImage();
        });
        
        // Auto-advance images (optional)
        this.startAutoPlay();
    }
    
    showImage(index) {
        // Remove active class from all images
        this.images.forEach(img => img.classList.remove('active'));
        
        // Add active class to current image
        this.images[index].classList.add('active');
        this.currentIndex = index;
    }
    
    nextImage() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage(nextIndex);
    }
    
    prevImage() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage(prevIndex);
    }
    
    startAutoPlay() {
        // Auto-advance every 4 seconds, pause on hover
        let autoPlay = setInterval(() => this.nextImage(), 4000);
        
        this.carousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlay);
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => this.nextImage(), 4000);
        });
    }
}

// Contact form functionality
class ContactForm {
    constructor(formElement) {
        this.form = formElement;
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const name = formData.get('name');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validate required fields
        if (!name || !subject || !message) {
            this.showError('Please fill in all required fields.');
            return;
        }
        
        // Create mailto link - REPLACE WITH YOUR ACTUAL EMAIL ADDRESS
        const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Redirect to thank you page after a short delay
        setTimeout(() => {
            window.location.href = 'thank-you.html';
        }, 1000);
    }
    
    showError(message) {
        // Remove existing error messages
        const existingError = this.form.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create and show error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background-color: #fee2e2;
            color: #dc2626;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 16px;
            border: 1px solid #fecaca;
        `;
        errorDiv.textContent = message;
        
        this.form.insertBefore(errorDiv, this.form.firstChild);
        
        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu toggle (if needed for responsive design)
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.style.display = 'none';
    
    // Add toggle button to header on mobile
    const header = document.querySelector('.header-content');
    header.appendChild(navToggle);
    
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });
    
    // Show/hide toggle button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
        } else {
            navToggle.style.display = 'none';
            nav.classList.remove('nav-open');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product carousels
    const carousels = document.querySelectorAll('.product-carousel');
    carousels.forEach(carousel => new ProductCarousel(carousel));
    
    // Initialize contact form if present
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        new ContactForm(contactForm);
    }
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Add loading animation completion
    document.body.classList.add('loaded');
});

// Utility function to create placeholder images
function createPlaceholderImage(width, height, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = '#64748b';
    ctx.font = '16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL();
}

// Create placeholder images for products if actual images aren't available
function initPlaceholderImages() {
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach((img, index) => {
        img.addEventListener('error', function() {
            // If image fails to load, replace with placeholder
            this.src = createPlaceholderImage(400, 240, `Product Image ${index + 1}`);
        });
    });
}

// Call placeholder image function after DOM loads
document.addEventListener('DOMContentLoaded', initPlaceholderImages);
