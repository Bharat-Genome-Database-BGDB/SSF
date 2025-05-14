document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Example: Submit the form data using fetch
        fetch('https://your-backend-endpoint.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerText = 'Thank you for signing up!';
            document.getElementById('message').style.color = '#28a745';
            document.getElementById('signup-form').reset();
        })
        .catch((error) => {
            document.getElementById('message').innerText = 'An error occurred. Please try again.';
            document.getElementById('message').style.color = '#d9534f';
        });
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }
});
