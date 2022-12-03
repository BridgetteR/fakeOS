const modalRecycle = document.querySelector(".recycle-bin");

document.querySelector(".recycle-trigger").addEventListener("click", () => {
    if (modalRecycle.style.display === "block") {
        modalRecycle.style.display = "none";
    } else {
        modalRecycle.style.display = "block";
    }
});

document
    .querySelector(".recycle-bin__close")
    .addEventListener("click", () => (modalRecycle.style.display = "none"));
