// Example availability data
const availability = {
    "2023-03-01": ["9:00 AM", "10:00 AM", "11:00 AM"], // Available hours for March 1, 2023
    "2023-03-02": ["10:00 AM", "2:00 PM"] // Available hours for March 2, 2023
};

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const day = urlParams.get('day');

    const availableHoursContainer = document.getElementById('availableHours');
    availableHoursContainer.innerHTML = '<h2>Available Hours for Day ' + day + '</h2>';

    const allHours = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM']; // All possible hours
    allHours.forEach(hour => {
        const hourElement = document.createElement('div');
        hourElement.className = 'hour';
        hourElement.textContent = hour;

        // Check if the hour is available
        if (availability[day] && availability[day].includes(hour)) {
            hourElement.classList.add('available');
        } else {
            hourElement.classList.add('blocked');
        }

        availableHoursContainer.appendChild(hourElement);
    });
});

// hourElement.addEventListener('click', function() {
//     if (hourElement.classList.contains('available')) {
//         hourElement.classList.remove('available');
//         hourElement.classList.add('blocked');
//         // Update your availability data store
//     } else {
//         hourElement.classList.remove('blocked');
//         hourElement.classList.add('available');
//         // Update your availability data store
//     }
// });
