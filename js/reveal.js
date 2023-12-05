function revealOnScroll() {
    console.log("Scrolling!");
    const REVEALS = document.querySelectorAll('.hidden');

    for (let i = 0; i < REVEALS.length; i++) {
        const WINDOW_HEIGHT = window.innerHeight;
        const REVEAL_TOP = REVEALS[i].getBoundingClientRect().top;
        const REVEAL_POINT = 300; 

        if (REVEAL_TOP < WINDOW_HEIGHT - REVEAL_POINT) {
            REVEALS[i].classList.add('revealed');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);