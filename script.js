// Enhanced interactions and animations

document.addEventListener('DOMContentLoaded', function() {
    // Get button elements
    const visitBtn = document.getElementById('visitBtn');
    const donateBtn = document.getElementById('donateBtn');
    
    // Add click handlers (you can update these URLs)
    visitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
            // TODO: Update with your actual new website URL
            const newWebsiteUrl = 'https://freeuniversitytools.org'; // Update this URL
            window.open(newWebsiteUrl, '_blank');
        }, 150);
    });
    
    donateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
            // TODO: Update with your actual donation URL (PayPal, Ko-fi, etc.)
            const donateUrl = 'https://paypal.me/yourusername'; // Update this URL
            window.open(donateUrl, '_blank');
        }, 150);
    });
    
    // Enhanced logo interactions
    const logoWrappers = document.querySelectorAll('.logo-wrapper');
    logoWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', function() {
            const logo = this.querySelector('.logo-image');
            if (logo) {
                logo.style.transform = 'scale(1.05)';
            }
        });
        
        wrapper.addEventListener('mouseleave', function() {
            const logo = this.querySelector('.logo-image');
            if (logo) {
                logo.style.transform = 'scale(1)';
            }
        });
    });
    
    // Staggered entrance animation for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            btn.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 400 + (index * 100));
    });
    
    // Add parallax effect to background blobs on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.5;
            blob.style.transform = `translateY(${scrolled * speed}px)`;
        });
        lastScrollY = scrolled;
    });
    
    // Add intersection observer for fade-in animations
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
    
    // Observe logo items
    document.querySelectorAll('.logo-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(item);
    });
});

