const modalFile = document.querySelector(".file-explorer");

document
    .querySelector(".taskbar__file-explorer")
    .addEventListener("click", () => {
        if (modalFile.style.display === "block") {
            modalFile.style.display = "none";
        } else {
            modalFile.style.display = "block";
        }
    });

document.querySelector(".explorer-trigger").addEventListener("click", () => {
    if (modalFile.style.display === "block") {
        modalFile.style.display = "none";
    } else {
        modalFile.style.display = "block";
    }
});

document.querySelector("#fileExplorer").addEventListener("click", () => {
    if (modalFile.style.display === "block") {
        modalFile.style.display = "none";
    } else {
        modalFile.style.display = "block";
    }
});

document
    .querySelector(".file-explorer__close")
    .addEventListener("click", () => (modalFile.style.display = "none"));
