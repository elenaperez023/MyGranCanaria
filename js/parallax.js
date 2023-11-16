function initialize() {
    window.addEventListener("scroll", moveImagesWhenUserScrolls)
}

function moveImagesWhenUserScrolls() {
    const SCROLL_POSITION = window.scrollY;

    const CAR = document.getElementById("car");
    CAR.style.right = SCROLL_POSITION + "px";
}

initialize();