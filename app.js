var closeFullScreen = document.querySelector(".close-full-screen");
var fullScreen = document.querySelector(".fullScreen")
var fullScreenImage = fullScreen.querySelector("img");

closeFullScreen.addEventListener("click", function () {
    fullScreen.classList.remove("show");
    fullScreen.classList.add("hide");
});

var gallery = document.querySelector(".galerija-slike");
var galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function (element) {
    element.querySelector(".fa-plus").addEventListener("click", function () {
        fullScreen.classList.remove("hide");
        fullScreen.classList.add("show");
        fullScreenImage.src = element.querySelector("img").getAttribute("src")

    });
});

// navbar links //
var navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (var i = 0; i < a.lenght; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});
