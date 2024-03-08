

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginDisplay = document.getElementById('loginDisplay');
    const loginInfo = document.getElementById('loginInfo');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const username = document.getElementsByName('username')[0].value;
        const password = document.getElementsByName('password')[0].value;

        loginInfo.textContent = `Logged in as: ${username}`;
        loginDisplay.style.display = 'block';
    });
});
