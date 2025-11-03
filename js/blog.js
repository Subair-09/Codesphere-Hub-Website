// Blog Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add animation on scroll for blog page elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.blog-card');
        
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
    const animatedElements = document.querySelectorAll('.blog-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Newsletter Form Handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
            this.reset();
        });
    }
    
    // Add reading time to blog posts
    const blogContents = document.querySelectorAll('.blog-content p');
    
    blogContents.forEach(content => {
        const text = content.textContent;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed
        
        const readingTimeElement = document.createElement('span');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.style.display = 'block';
        readingTimeElement.style.marginTop = '10px';
        readingTimeElement.style.fontSize = '0.9rem';
        readingTimeElement.style.color = 'var(--light-violet)';
        readingTimeElement.textContent = `Reading time: ${readingTime} min read`;
        
        content.parentNode.insertBefore(readingTimeElement, content.nextSibling);
    });
});