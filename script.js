// DOM Elements
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const goToLogin = document.getElementById('goToLogin');
const goToRegister = document.getElementById('goToRegister');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('responsive');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('responsive');
    });
});

// Switch between login and register forms
function showLoginForm() {
    loginForm.style.left = '4px';
    registerForm.style.right = '-520px';
    loginBtn.classList.add('white-btn');
    registerBtn.classList.remove('white-btn');
}
function showRegisterForm() {
    loginForm.style.left = '-510px';
    registerForm.style.right = '5px';
    loginBtn.classList.remove('white-btn');
    registerBtn.classList.add('white-btn');
}