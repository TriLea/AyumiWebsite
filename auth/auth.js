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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function login(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('login-password').value;

    if (!isValidEmail(email)) {
        console.error("Invalid email format:", email);
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Logged in as:", userCredential.user.email);
            // Redirect or update UI accordingly
        })
        .catch((error) => {
            console.error("Authentication failed:", error);
        });
}

// Attach the event listener
document.getElementById('login-form').addEventListener('submit', login);
