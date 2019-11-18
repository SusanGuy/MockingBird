const founderImage = document.querySelector("#founder-image");
const ceoImage = document.querySelector("#ceo-image");
const cfoImage = document.querySelector("#cfo-image");

founderImage.addEventListener("click", e => {
    if (founderImage.getAttribute("src") !== "images/p1.png") {
        founderImage.setAttribute("src", "images/p1.png");
    } else {
        founderImage.setAttribute("src", "images/susan.png");
    }
});

ceoImage.addEventListener("click", e => {
    if (ceoImage.getAttribute("src") !== "images/p2.png") {
        ceoImage.setAttribute("src", "images/p2.png");
    } else {
        ceoImage.setAttribute("src", "images/rishabh.png");
    }
});

cfoImage.addEventListener("click", e => {
    if (cfoImage.getAttribute("src") !== "images/p3.png") {
        cfoImage.setAttribute("src", "images/p3.png");
    } else {
        cfoImage.setAttribute("src", "images/baskota.png");
    }
});