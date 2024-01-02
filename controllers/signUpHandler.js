// In another file where you handle user sign-up or similar functionality

import { createUser } from './db/userManagement'; // Adjust the path as per your project structure

// Example user data, possibly coming from a sign-up form
const newUserData = {
  userId: "uniqueUserId",
  phoneNumber: "123-456-7890",
  dogName: "Buddy",
  documentURL1: "https://path-to-first-document-image",
  documentURL2: "https://path-to-second-document-image",
  expirationDate: "2023-12-31T00:00:00Z",
  role: "customer"
};

createUser(newUserData)
  .then(() => {
    // Handle successful user creation
  })
  .catch((error) => {
    // Handle any errors in user creation
  });
