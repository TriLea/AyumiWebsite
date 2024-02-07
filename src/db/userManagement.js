// Functions to create and update user data in Firestore
// Including setting and updating document expiration dates
import { app, db } from '../../firebaseConfig.js';
// import firebase from '../firebaseConfig'; // Adjust the path as per your project structure

// Function to create a new user in Firestore
function createUser(userData) {
  return db.collection('users').doc(userData.userId).set(userData)
    .then(() => {
      console.log("User created successfully");
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
}

// You can add more user-related functions here as needed,
// such as updating a user, retrieving user data, etc.

export { createUser };

