// firestoreSchema.js

// Example schema for 'users' collection
const usersCollectionSchema = {
    userId: 'unique-user-id',
    phoneNumber: '123-456-7890',
    dogName: 'Buddy',
    documentURL1: 'https://path-to-first-document-image',
    documentURL2: 'https://path-to-second-document-image',
    expirationDate: '2023-12-31T00:00:00Z', // ISO 8601 format
    role: 'customer' // or 'admin'
  };
  
  // Add more collection schemas as needed
  
  export { usersCollectionSchema };
  