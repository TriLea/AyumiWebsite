let lastScrollTop = 0;
let bgPosition = 0;
let ticking = false;

function updateParallax() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // downscroll
        bgPosition -= 0.3;
        // console.log('down');
    } else {
        // upscroll
        bgPosition += 0.3;
        // console.log('up');
    }

    // Update background position
    document.querySelector('.parallax-bg').style.transform = `translateY(${bgPosition}px)`;

    ticking = false;
}

window.addEventListener('scroll', function (e) {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            updateParallax();
            ticking = true;
        });
    }
});

// // Apply will-change for smoother animations
// document.querySelector('.parallax-bg').style.willChange = 'transform';
