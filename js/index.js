// Index Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add animation on scroll for index page elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.program-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.program-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add pulse animation to hero elements
    const heart = document.querySelector('.heart');
    const sparkle = document.querySelector('.sparkle');
    
    if (heart && sparkle) {
        setInterval(() => {
            heart.style.animation = 'none';
            sparkle.style.animation = 'none';
            setTimeout(() => {
                heart.style.animation = 'pulse 2s infinite';
                sparkle.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 4000);
    }
});