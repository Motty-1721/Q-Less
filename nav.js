// DOM Elements
const navbar = document.getElementById('navbar');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const authButtons = document.getElementById('authButtons');
const userProfile = document.getElementById('userProfile');
const userName = document.getElementById('userName');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const logoutBtn = document.getElementById('logoutBtn');

// Store the current user's name globally
let currentUserName = '';

// Check if user is logged in from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('qlessUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        currentUserName = user.name;
        showLoggedInState(user.name);
    }
});

// Transparent navbar becomes solid on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Show login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Show signup modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Close modals
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeSignupModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Switch between login and signup modals
switchToSignup.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'flex';
});

switchToLogin.addEventListener('click', () => {
    signupModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('qlessUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Successful login
        loginModal.style.display = 'none';
        localStorage.setItem('qlessUser', JSON.stringify(user));
        currentUserName = user.name;
        showLoggedInState(user.name);
        loginForm.reset();
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Save user to localStorage
    const users = JSON.parse(localStorage.getItem('qlessUsers') || '[]');

    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert('This email is already registered. Please login instead.');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('qlessUsers', JSON.stringify(users));

    // Just save information without logging in
    signupModal.style.display = 'none';
    alert('Registration successful! Please log in with your credentials.');
    signupForm.reset();

    // Show login modal after successful registration
    loginModal.style.display = 'flex';
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('qlessUser');
    currentUserName = '';
    showLoggedOutState();
    window.location.href = 'index.html';
});

// Function to show logged in state
function showLoggedInState(name) {
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userName.textContent = name;
}

// Function to show logged out state
function showLoggedOutState() {
    authButtons.style.display = 'flex';
    userProfile.style.display = 'none';
}

// Function to get the current user's name
export function getUserName() {
    // First check if we have a current user
    if (currentUserName) {
        return currentUserName;
    }
    
    // If no current user, check if we have a stored user
    const loggedInUser = localStorage.getItem('qlessUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        return user.name;
    }
    
    // If no stored user, check for the signup field value
    const signupNameField = document.getElementById('signupName');
    if (signupNameField && signupNameField.value) {
        return signupNameField.value;
    }
    
    // Fallback to a default name
    return "Guest";
}