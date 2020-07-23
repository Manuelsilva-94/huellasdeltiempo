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



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',

});
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
});

let imgForPopup = document.querySelectorAll('.slider-for .item img'),
    divForPopup = document.querySelector('.popup-img');

for (var i = 0; i < imgForPopup.length; i++) {
    imgForPopup[i].addEventListener('click', function () {
        let scrollY = window.scrollY,
            body = document.querySelector('body');
        let imgClone = this.cloneNode();
        let close = document.createElement('div');
        if (divForPopup.children.length > 0) {
            divForPopup.removeChild(divForPopup.firstElementChild);
            divForPopup.removeChild(divForPopup.firstElementChild);
        }

        imgClone.appendChild(close);
        divForPopup.appendChild(close);
        divForPopup.appendChild(imgClone);

        divForPopup.style.display = "flex";
        divForPopup.style.top = scrollY + "px";

        body.style.overflow = "hidden";

        close.addEventListener('click', function () {
            let scrollY = window.scrollY;
            divForPopup.style.display = "none";
            body.style.overflow = "initial";
        });
    });
}