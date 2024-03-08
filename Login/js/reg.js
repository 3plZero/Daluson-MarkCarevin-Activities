// register.js

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const registerDisplay = document.getElementById('registerDisplay');
    const registerInfo = document.getElementById('registerInfo');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Assuming you have input elements with 'name' attributes for username, name, gender, and password
        const username = document.getElementsByName('username')[0].value;
        const name = document.getElementsByName('name')[0].value;
        const gender = document.getElementsByName('gender')[0].value;
        const password = document.getElementsByName('password')[0].value;

        // Add your registration logic here (e.g., store user data, perform server-side validation)
        // For demonstration, displaying the registration information
        registerInfo.textContent = `Registered as: ${name}, Username: ${username}, Gender: ${gender}`;
        registerDisplay.style.display = 'block';
    });
});
