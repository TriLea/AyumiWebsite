import firebaseConfig from '../firebaseConfig.js';
import { app, db } from '../firebaseConfig.js';

document.addEventListener('DOMContentLoaded', function() {
    // ... code to generate calendar days ...

    // Add click event listener to each day
    document.querySelectorAll('.day').forEach(function(dayElement) {
        dayElement.addEventListener('click', function() {
            const day = dayElement.getAttribute('data-day');
            window.location.href = 'hours.html?day=' + day; // Navigate to hours.html
        });
    });
});
