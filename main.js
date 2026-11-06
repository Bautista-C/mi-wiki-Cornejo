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



// Funcionalidad 4: apartado de discusión
const formularioComentarios = document.querySelector('#formulario-comentarios');
const campoNombre = document.querySelector('#nombre-comentario');
const campoComentario = document.querySelector('#texto-comentario');
const contadorCaracteres = document.querySelector('#contador-caracteres');
const avisoComentarios = document.querySelector('#aviso-comentarios');
const listaComentarios = document.querySelector('#lista-comentarios');

campoComentario.addEventListener('input', function () {
    contadorCaracteres.textContent = campoComentario.value.length + ' / 200';
});

formularioComentarios.addEventListener('submit', function (e) {
    e.preventDefault();

    avisoComentarios.textContent = '';
    campoNombre.classList.remove('error');
    campoComentario.classList.remove('error');

    const nombre = campoNombre.value.trim();
    const comentario = campoComentario.value.trim();

    if (nombre === '') {
        avisoComentarios.textContent = 'El nombre no puede estar vacío.';
        campoNombre.classList.add('error');
        return;
    }

    if (comentario.length < 10 || comentario.length > 200) {
        avisoComentarios.textContent = 'El comentario debe tener entre 10 y 200 caracteres.';
        campoComentario.classList.add('error');
        return;
    }

    crearComentario(nombre, comentario);
    formularioComentarios.reset();
    contadorCaracteres.textContent = '0 / 200';
});

function crearComentario(nombre, comentario) {
    const elementoComentario = document.createElement('li');
    const nombreUsuario = document.createElement('strong');
    nombreUsuario.textContent = nombre;
    const textoComentario = document.createElement('p');
    textoComentario.textContent = comentario;

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Borrar';
    botonBorrar.classList.add('boton-borrar-comentario');
    botonBorrar.type = 'button';

    elementoComentario.append(nombreUsuario);
    elementoComentario.append(textoComentario);
    elementoComentario.append(botonBorrar);
    listaComentarios.append(elementoComentario);
}

listaComentarios.addEventListener('click', function (e) {
    if (e.target.classList.contains('boton-borrar-comentario')) {
        e.target.parentElement.remove();
    }
});