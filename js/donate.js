// Donate Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add animation on scroll for donate page elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.impact-card, .support-card');
        
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
    const animatedElements = document.querySelectorAll('.impact-card, .support-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Donation Form Handling
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        // Amount selection
        const amountOptions = document.querySelectorAll('.amount-option');
        const customAmount = document.getElementById('customAmount');
        
        amountOptions.forEach(option => {
            option.addEventListener('click', function() {
                amountOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                customAmount.value = '';
            });
        });
        
        customAmount.addEventListener('input', function() {
            amountOptions.forEach(opt => opt.classList.remove('active'));
        });
        
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const amountOption = document.querySelector('.amount-option.active');
            const customAmountValue = customAmount.value;
            let amount = 0;
            
            if (amountOption) {
                amount = amountOption.getAttribute('data-amount');
            } else if (customAmountValue) {
                amount = customAmountValue;
            }
            
            if (amount <= 0) {
                alert('Please select or enter a donation amount.');
                return;
            }
            
            const donationType = document.getElementById('donationType').value;
            const designation = document.getElementById('designation').value;
            const donorName = document.getElementById('donorName').value;
            const donorEmail = document.getElementById('donorEmail').value;
            
            if (!donorName || !donorEmail) {
                alert('Please fill in your personal information.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(donorEmail)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            const isAnonymous = document.getElementById('anonymous').checked;
            const donorDisplay = isAnonymous ? 'Anonymous' : donorName;
            
            alert(`Thank you ${donorDisplay} for your $${amount} ${donationType === 'monthly' ? 'monthly' : ''} donation! Your support helps us empower the next generation of tech talent.`);
            
            // Reset form
            this.reset();
            amountOptions.forEach(opt => opt.classList.remove('active'));
        });
    }
    
    // Add impact visualization
    const impactCards = document.querySelectorAll('.impact-card');
    
    impactCards.forEach(card => {
        const amount = card.querySelector('h3').textContent;
        const impactText = card.querySelector('p').textContent;
        
        card.addEventListener('click', function() {
            // Auto-fill the donation amount when clicking on impact card
            const amountValue = amount.replace('$', '');
            const amountOptions = document.querySelectorAll('.amount-option');
            
            amountOptions.forEach(option => {
                option.classList.remove('active');
                if (option.getAttribute('data-amount') === amountValue) {
                    option.classList.add('active');
                }
            });
            
            document.getElementById('customAmount').value = '';
            
            // Scroll to donation form
            document.querySelector('.donation-form-container').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});