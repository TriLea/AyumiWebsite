// window.addEventListener("scroll", function(){
//     var scrollTop = window.scrollY;
//     document.body.style.backgroundPositionY = scrollTop * 0.8 + "px";
// });

// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

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
