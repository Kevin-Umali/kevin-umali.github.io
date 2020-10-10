window.addEventListener("scroll",
    function () {
        var getHeader = document.querySelector("header");
        getHeader.classList.toggle("sticky", window.scrollY > 0);
    });

scrollAnimation();

function scrollAnimation() {

    ScrollReveal().reveal('.welcomeImg', {
        duration: 500,
        scale: 1,
        delay: 100,
        reset: true,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.aboutImg', {
        duration: 500,
        scale: 1,
        delay: 100,
        reset: true,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.content', {
        duration: 500,
        scale: 1,
        delay: 100,
        reset: true,
        easing: 'ease-in-out'
    });
}

