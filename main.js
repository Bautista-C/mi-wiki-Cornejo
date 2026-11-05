//Funcionalidad 1: generar el indice automaticamente
const listaIndice = document.querySelector('#lista-indice');
const titulos = document.querySelectorAll('main h2');
titulos.forEach(function (titulo) {
    const elementoLista = document.createElement('li');
    const enlace = document.createElement('a');
    enlace.href = '#' + titulo.id;
    enlace.textContent = titulo.textContent;
    elementoLista.append(enlace);
    listaIndice.append(elementoLista);
});



//Funcionalidad 2: cambiar la apariencia de la pagina
const botonModo = document.querySelector('#boton-modo');
const botonPequeno = document.querySelector('#boton-pequeno');
const botonEstandar = document.querySelector('#boton-estandar');
const botonGrande = document.querySelector('#boton-grande');
const articulo = document.querySelector('main');

botonModo.addEventListener('click', function () {
    document.body.classList.toggle('oscuro');
    if (document.body.classList.contains('oscuro')) {
        botonModo.textContent = 'Modo claro';
    } else {
        botonModo.textContent = 'Modo oscuro';
    }

});

botonPequeno.addEventListener('click', function () {
    articulo.classList.remove('texto-estandar');
    articulo.classList.remove('texto-grande');
    articulo.classList.add('texto-pequeno');
    botonPequeno.classList.add('seleccionado');
    botonEstandar.classList.remove('seleccionado');
    botonGrande.classList.remove('seleccionado');
});

botonEstandar.addEventListener('click', function () {
    articulo.classList.remove('texto-pequeno');
    articulo.classList.remove('texto-grande');
    articulo.classList.add('texto-estandar');
    botonEstandar.classList.add('seleccionado');
    botonPequeno.classList.remove('seleccionado');
    botonGrande.classList.remove('seleccionado');
});

botonGrande.addEventListener('click', function () {
    articulo.classList.remove('texto-pequeno');
    articulo.classList.remove('texto-estandar');
    articulo.classList.add('texto-grande');
    botonGrande.classList.add('seleccionado');
    botonPequeno.classList.remove('seleccionado');
    botonEstandar.classList.remove('seleccionado');
});



//Funcionalidad 3: secciones plegables
const titulosPlegables = document.querySelectorAll('main section h2');

titulosPlegables.forEach(function (titulo) {
    titulo.addEventListener('click', function () {
        titulo.parentElement.classList.toggle('plegada');
    });
});