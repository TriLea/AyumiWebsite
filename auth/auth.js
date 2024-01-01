// Firebase auth related functions (sign up, login, etc.)

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDfFbxshE7ZCbRf7JEMFfS8X9Gt3bFkSxw",
    authDomain: "onlywandogs-36bf9.firebaseapp.com",
    projectId: "onlywandogs-36bf9",
    storageBucket: "onlywandogs-36bf9.appspot.com",
    messagingSenderId: "78048816439",
    appId: "1:78048816439:web:b5cd0d09dfd66b4a97beb2",
    measurementId: "G-CSHK3NFE3E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//regex to check if email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function login() {
    // Retrieve and trim the email input from the user
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Validate the email format
    if (!isValidEmail(email)) {
        console.error("Invalid email format:", email);
        // Update UI to show an error message
        return;
    }

    // Proceed with Firebase authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Authentication successful
            console.log("Logged in as:", userCredential.user.email);
            // Redirect or update UI
        })
        .catch((error) => {
            console.error("Authentication failed:", error);
            // Show error message to the user
        });
}

// Attaches the login function to window for global access from HTML
window.login = login;
