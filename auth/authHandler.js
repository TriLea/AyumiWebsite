
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

import { createUser } from '../db/userManagement.js';

// Add event listener for the sign-up form submission
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        // ... other user data fields
    };

    // Call the createUser function (make sure to import or define it)
    createUser(userData)
        .then(() => {
            console.log('User signed up successfully');
            // Handle successful sign up
        })
        .catch((error) => {
            console.error('Sign up failed:', error);
            // Handle errors
        });
});

// Add similar handling for login if it's in the same file
