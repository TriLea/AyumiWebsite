document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        dayElement.setAttribute('data-day', day); // Set a data attribute for the day

        dayElement.addEventListener('click', function () {
            window.location.href = 'hours.html?day=' + day; // Navigate to hours page with query parameter
        });

        calendar.appendChild(dayElement);
    }

    const now = new Date();
    console.log("Year:", now.getFullYear());
    console.log("Month:", now.getMonth() + 1); // Months are 0-indexed
    console.log("Day:", now.getDate());
    console.log("Hour:", now.getHours());
    console.log("Minute:", now.getMinutes());
    console.log("Second:", now.getSeconds());
});
