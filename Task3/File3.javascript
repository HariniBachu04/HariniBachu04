function enroll(courseName) {
    alert(`You have enrolled in ${courseName}`);
    

function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
       
        document.getElementById('contactResult').textContent = `Thank you for your message, ${name}! We'll get back to you at ${email}.`;
        
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('contactResult').textContent = 'Please fill out all fields.';
    }
}
