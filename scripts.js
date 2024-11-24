document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    // You can replace this section with code to send the form data to the server.
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const fileContent = `
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `;

    const file = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'contact_message.txt';
    link.click();

    // Optionally, show a success message after submission
    alert('Your message has been sent successfully!');
});
