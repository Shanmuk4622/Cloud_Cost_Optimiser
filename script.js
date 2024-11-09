document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = this.elements[0].value; // Get the name input value
    const email = this.elements[1].value; // Get the email input value
    const message = this.elements[2].value; // Get the message input value

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.'); // Alert if fields are empty
        return;
    }

    // Display a success message (you can replace this with actual form submission logic)
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);

    // Optionally, reset the form
    this.reset();
});