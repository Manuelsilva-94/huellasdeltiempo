// Funciones para filtrar
/*document.addEventListener('load', function () {
    var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    var allProducts = Array.from(document.querySelectorAll('.producto'));
    var checked = {};

    getChecked('Accesorios');
    getChecked('Muebles');
    getChecked('Mesas');
    getChecked('Sillas');
    getChecked('Bronce');
    getChecked('Cedro');
    getChecked('Marmol');
    getChecked('Pinotea');
    getChecked('Thonet');


    Array.prototype.forEach.call(allCheckboxes, function (el) {
        el.addEventListener('change', toggleCheckbox);
    });

    function toggleCheckbox(e) {
        getChecked(e.target.name);
        setVisibility();
    }

    function getChecked(name) {
        checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
            return el.value;
        });
    }

    function setVisibility() {
        allProducts.map(function (el) {
            var Accesorios = checked.Accesorios.length ? _.intersection(Array.from(el.classList), checked.Accesorios).length : true;
            var Muebles = checked.Muebles.length ? _.intersection(Array.from(el.classList), checked.Muebles).length : true;
            var Mesas = checked.Mesas.length ? _.intersection(Array.from(el.classList), checked.Mesas).length : true;
            var Sillas = checked.Sillas.length ? _.intersection(Array.from(el.classList), checked.Sillas).length : true;
            var Bronce = checked.Bronce.length ? _.intersection(Array.from(el.classList), checked.Bronce).length : true;
            var Bronce = checked.Bronce.length ? _.intersection(Array.from(el.classList), checked.Bronce).length : true;
            var Cedro = checked.Cedro.length ? _.intersection(Array.from(el.classList), checked.Cedro).length : true;
            var Marmol = checked.Marmol.length ? _.intersection(Array.from(el.classList), checked.Marmol).length : true;
            var Pinotea = checked.Pinotea.length ? _.intersection(Array.from(el.classList), checked.Pinotea).length : true;
            var Thonet = checked.Thonet.length ? _.intersection(Array.from(el.classList), checked.Thonet).length : true;


            if (Accesorios && Muebles && Mesas && Sillas && Bronce && Cedro && Marmol && Pinotea && Thonet) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });
    }
});*/