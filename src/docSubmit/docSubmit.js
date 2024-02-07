import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app, db } from '../firebaseConfig.js';

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();
const auth = getAuth();

document.getElementById('doc-submit-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get the currently signed-in user
    const user = auth.currentUser;
    if (!user) {
        alert('You must be signed in to submit documents.');
        return;
    }

    // Get files and expiration dates from the form
    const doc1File = document.getElementById('doc1').files[0];
    const doc2File = document.getElementById('doc2').files[0];
    const doc1Expiration = document.getElementById('doc1-expiration').value;
    const doc2Expiration = document.getElementById('doc2-expiration').value;

    // Upload files to Firebase Storage and save references in Firestore
    try {
        if (doc1File) {
            const doc1Ref = storageRef(storage, `documents/${user.uid}/doc1`);
            await uploadBytes(doc1Ref, doc1File);
            alert('Document 1 uploaded successfully.');

            await setDoc(doc(db, 'users', user.uid, 'documents', 'doc1'), {
                expiration: doc1Expiration,
                filename: doc1File.name,
                // other metadata
            });
            alert('Document 1 reference saved successfully.');
        }

        if (doc2File) {
            const doc2Ref = storageRef(storage, `documents/${user.uid}/doc2`);
            await uploadBytes(doc2Ref, doc2File);
            alert('Document 2 uploaded successfully.');

            await setDoc(doc(db, 'users', user.uid, 'documents', 'doc2'), {
                expiration: doc2Expiration,
                filename: doc2File.name,
                // other metadata
            });
            alert('Document 2 reference saved successfully.');
        }

        alert('All documents submitted successfully.');
    } catch (error) {
        console.error('Error submitting documents:', error);
        alert('Error submitting documents. Please try again.');
    }
});
