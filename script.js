document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual submit
    
    const formMessage = document.getElementById('formMessage');
    formMessage.style.color = '#27ae60';
    formMessage.textContent = 'Thank you! Your message has been sent. We will get back to you soon!';
    
    // Clear form
    this.reset();
    
    // Optional: Hide message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});