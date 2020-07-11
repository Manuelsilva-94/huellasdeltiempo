$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        arrows: true,
        mobileFirst: true,
    });
});

var burgerContainer = document.querySelector(".burger-container"),
    nav = document.querySelector("nav"),
    navOpen = false,
    header = document.querySelector("header");

burgerContainer.addEventListener("click", () => {
    if (!navOpen) {
        nav.style.right = "0";
        header.style.overflow = "visible";
        burgerContainer.classList.add("burger-open");
        navOpen = true;
    } else {
        nav.style.right = "-60%";
        header.style.overflow = "hidden";
        burgerContainer.classList.remove("burger-open");
        navOpen = false;
    }
});
