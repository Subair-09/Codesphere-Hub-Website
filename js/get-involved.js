// Get Involved Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add animation on scroll for get-involved page elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.option-card');
        
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
    const animatedElements = document.querySelectorAll('.option-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Volunteer Form Handling
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const expertise = document.getElementById('expertise').value;
            const interest = document.getElementById('interest').value;
            
            if (!name || !email || !expertise || !interest) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message
            alert('Thank you for your interest in volunteering! We will be in touch soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Add interactive effects to option cards
    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
        const icon = card.querySelector('.option-icon');
        
        card.addEventListener('mouseenter', function() {
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
});