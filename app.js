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
}

/*function agregarAmigo() {

 if(inputAmigo.value=='') {
    alert('¡Debes ingresar un nombre!'); 
 }
 
    listaAmigos.push(inputAmigo.value); //push() añade un elemento al final de un array

    console.log(listaAmigos);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;    
    console.log(listaAmigos);   
    limpiarBotonAñadir();    
    
}	*/

function sortearAmigo() {
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoElemento('#resultado', amigoSorteado);
}