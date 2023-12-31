// Initialize Firebase
// firebase.initializeApp({...});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Convert username to an email-like string
    const email = username + "@yourapp.com";

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Authentication successful
        })
        .catch((error) => {
            console.error("Authentication failed:", error);
        });
}
