var viewportWidth = jQuery(window).width();
$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        arrows: true,
        mobileFirst: true,
        //autoplay: true,
    });

    /*if (viewportWidth >= 1200) {
        $(".slider").slick("unslick");
    }*/
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

var productos = document.querySelectorAll(".productos > li");

for (let i = 0; i < productos.length; i++) {
    productos[i].addEventListener("click", function () {
        productos[i].lastElementChild.classList.add("slider-active");

        productos[i].lastElementChild.style.display = "flex";

        $(".img-slider").slick({
            dots: true,
            arrows: true,
            adaptiveHeight: true,
        });
    });
}
