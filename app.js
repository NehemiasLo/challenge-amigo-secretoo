let inputAmigo = document.getElementById('amigo');
let listaAmigos = [];
let ulListaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarBotonAñadir() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nombreAmigo = inputAmigo.value;
    
    if (nombreAmigo === '') {
        alert('¡Debes ingresar un nombre!');
        return;
    }
    listaAmigos.push(nombreAmigo);
    ulListaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
    limpiarBotonAñadir();
    actualizarListaAmigos();


}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('¡Debes agregar al menos dos amigos antes de sortear!');
        return;
    }
    
    // Sorteamos un amigo secreto
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoElemento('#resultado', `El amigo secreto es: ${amigoSorteado}`);
}

function actualizarListaAmigos() {
    let ul = document.querySelector('#listaAmigos');
    ul.innerHTML = '';

    /*listaAmigos.forEach(amigo => {
        ul.innerHTML += `<li>${amigo}</li>`;
    });*/
}