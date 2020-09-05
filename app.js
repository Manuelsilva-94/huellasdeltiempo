var viewportWidth = jQuery(window).width();
/**Inicializar Slick para HOME */
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
/**Fin Slick Home */

/*Abrir y cerrar menu hamburguesa para mobile */
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
/** Fin menu hamburgesa */


/**Inicializar slick para seccion productos 
* TODO -> Individualizar cada slick. Que cada nav solo mueva su slider

*/

$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
});

/**Fin Slick productos */

/** Crear Popup de imagen mas grande en seccion productos */
let imgForPopup = document.querySelectorAll(".slider-for .item img"),
    divForPopup = document.querySelector(".popup-img");

for (var i = 0; i < imgForPopup.length; i++) {
    imgForPopup[i].addEventListener("click", function () {
        let scrollY = window.scrollY,
            body = document.querySelector("body");
        let imgClone = this.cloneNode();
        let close = document.createElement("div");
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

        close.addEventListener("click", function () {
            divForPopup.style.display = "none";
            body.style.overflow = "initial";
        });
    });
}
/**Fin pop up imagenes grandes productos */



let productos = document.querySelectorAll(".productos li"),
    aTipo = [],
    aMaterial = [],
    aDescuento = [];

/** Recorrer productos para conseguir data attributes */
productos.forEach((item) => {
    armarArrays(item.dataset);
});

/**Arma los arrays de cada filtro posible
 * @param item recibe el dataset de cada producto
 * pregunta si el array ya tiene al data attribute y si no lo agrega
 */
function armarArrays(item) {
    if (aTipo.includes(item.tipo) == false) {
        aTipo.push(item.tipo);
    }

    if (aMaterial.includes(item.material) == false) {
        aMaterial.push(item.material);
    }

    if (
        aDescuento.includes(item.descuento) == false &&
        item.descuento != "false"
    ) {
        aDescuento.push(item.descuento);
    }
}

let filtroTipo = document.querySelector(".tipo"),
    filtroMaterial = document.querySelector(".material"),
    filtroDescuento = document.querySelector(".descuento");

/** Arma los input checkbox dentro del menu de filtros
 * @param array es el array de filtros posibles
 * @param name es el nombre de cada filtro posible
 */
function armarFiltros(array, name) {
    array.forEach((nombre) => {
        let cbxFiltro = document.createElement("div");
        cbxFiltro.innerHTML = '<input type="checkbox" id="' + nombre + '" name="' + nombre + '" value="' + nombre + '"><label for="' + nombre + '">' + nombre + '</label>';

        if (name == "tipo") {
            filtroTipo.appendChild(cbxFiltro);
        }

        if (name == "material") {
            filtroMaterial.appendChild(cbxFiltro);
        }

        if (name == "descuento") {
            filtroDescuento.appendChild(cbxFiltro);
        }
    });
}

armarFiltros(aTipo, "tipo");
armarFiltros(aMaterial, "material");
armarFiltros(aDescuento, "descuento");

let filtrar = document.querySelector(".filtrar"),
    filtros = document.querySelector(".filtros");

/**Funcion de abrir y cerrar menu de filtros */
filtrar.addEventListener("click", function () {
    if (filtros.classList.contains("filtros-show")) {

        filtros.classList.remove("filtros-show");
    } else {
        orden.classList.remove("orden-show");
        filtros.classList.add("filtros-show");
    }
});

let ordenar = document.querySelector(".ordenar"),
    orden = document.querySelector(".orden");

/**Funcion de abrir y cerrar menu de orden */
ordenar.addEventListener("click", function () {
    if (orden.classList.contains("orden-show")) {
        orden.classList.remove("orden-show");
    } else {
        filtros.classList.remove("filtros-show");
        orden.classList.add("orden-show");
    }
});


let allCheckboxes = document.querySelectorAll('input[type=checkbox]'),
    checked = [];
/**Se fija si un checkbox fue clickeado
 * Si el array de inputs checkeados esta vacio lo agrega
 * si no esta vacio pero no existe en el array lo agrega
 * si ya existe y se checkea de vuelta, se elimina
 * llama a la funcion showProducts para mostrar u ocultar productos
 */
allCheckboxes.forEach(element => {
    element.addEventListener('change', function () {
        let checkedCbx = element.name;
        console.log(checkedCbx);

        if (checked.length == 0) {
            checked.push(checkedCbx);
        } else if (element.checked && checked.indexOf(checkedCbx) == -1) {
            checked.push(checkedCbx);
        } else {
            let checkedCbxPos = checked.indexOf(checkedCbx);
            console.log(checkedCbxPos);
            checked.splice(checkedCbxPos, 1);
        }
        showProducts(checked);
    })
});

/**
 * Muestra u oculta productos dependiendo de los checkbox seleccionados
 * @param  checked array de checkbox seleccionados
 * si checked esta vacio, muestra todos los productos
 * Oculta todos los products
 * Recorre a los productos y si alguno de sus data-attributes coincide con los valores de checked,los agrega a un productArray
 * Recorre los elementos en productArray y los muestra
 * TODO -> Refaccionar y optimizar codigo
 */

function showProducts(checked) {
    if (checked.length == 0) {
        for (let a = 0; a < productos.length; a++) {
            productos[a].style.display = "block";
        }
    }
    let productArray = [];
    for (let j = 0; j < checked.length; j++) {
        for (let k = 0; k < productos.length; k++) {

            productos[k].style.display = "none";

            dataArray = productos[k].dataset;
            if (dataArray.descuento == checked[j] || dataArray.material == checked[j] || dataArray.tipo == checked[j]) {
                productArray.push(productos[k]);
                console.log(productArray);

                for (let l = 0; l < productArray.length; l++) {
                    productArray[l].style.display = "block";
                }
            }
        }

    }
}

/**Funcionalidad de ordenar resultados */