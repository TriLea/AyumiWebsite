
$(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    $('.parallax-bg').css('top', -(scrolled * 0.3) + 'px');
});

//comments are previous attempts and ideas, keeping them for inspiration if needed

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
