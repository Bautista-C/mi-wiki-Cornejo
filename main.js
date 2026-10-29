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
