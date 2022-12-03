// open/close
const modalSlides = document.querySelector(".gallery-program");

document.querySelector(".taskbar__gallery").addEventListener("click", () => {
    if (modalSlides.style.display === "block") {
        modalSlides.style.display = "none";
    } else {
        modalSlides.style.display = "block";
    }
});

document.querySelector(".gallery-trigger").addEventListener("click", () => {
    if (modalSlides.style.display === "block") {
        modalSlides.style.display = "none";
    } else {
        modalSlides.style.display = "block";
    }
});

document.querySelector("#galleryMenu").addEventListener("click", () => {
    if (modalSlides.style.display === "block") {
        modalSlides.style.display = "none";
    } else {
        modalSlides.style.display = "block";
    }
});

document
    .querySelector(".gallery-program__close")
    .addEventListener("click", () => (modalSlides.style.display = "none"));

// Carousel function
const slide1 = document.querySelector(".gallery-program__slides--1");
const slide2 = document.querySelector(".gallery-program__slides--2");
const slide3 = document.querySelector(".gallery-program__slides--3");

document.querySelector(".next").addEventListener("click", () => {
    if (
        slide1.style.display === "block" &&
        slide2.style.display === "none" &&
        slide3.style.display === "none"
    ) {
        slide1.style.display = "none";
        slide2.style.display = "block";
        slide3.style.display = "none";
    } else if (
        slide1.style.display === "none" &&
        slide2.style.display === "block" &&
        slide3.style.display === "none"
    ) {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "block";
    } else {
        slide1.style.display = "block";
        slide2.style.display = "none";
        slide3.style.display = "none";
    }
});

document.querySelector(".prev").addEventListener("click", () => {
    if (
        slide1.style.display === "block" &&
        slide2.style.display === "none" &&
        slide3.style.display === "none"
    ) {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "block";
    } else if (
        slide1.style.display === "none" &&
        slide2.style.display === "none" &&
        slide3.style.display === "block"
    ) {
        slide1.style.display = "none";
        slide2.style.display = "block";
        slide3.style.display = "none";
    } else {
        slide1.style.display = "block";
        slide2.style.display = "none";
        slide3.style.display = "none";
    }
});
