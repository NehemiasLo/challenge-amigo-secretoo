let inputAmigo = document.getElementById('amigo'); 
let listaAmigos = [];
let ulListaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Muestra parráfo con el nombre del amigo secreto 
function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Desabilitar boton sortear si hay solo un amigo
function refrescarBotonSortear() {
    let botonSortear = document.getElementById('button-draw');
    if (listaAmigos.length < 2) {
        botonSortear.disabled = true;
    } else {
        botonSortear.disabled =
        false;
    }
}

function limpiarBotonAñadir() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.toUpperCase().trim(); 

    // Validamos que el nombre solo contenga letras y espacios
    let regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Expresión regular para validar el nombre
    if (nombreAmigo === '') {
        alert('¡Debes ingresar un nombre!');
        return;
    }
    
    if (!regex.test(nombreAmigo)) {
        alert('¡El nombre solo puede contener letras y espacios!');
        return;
    }

    // Validamos que el amigo no se encuentre en la lista
  let existeAmigo = listaAmigos.find(amigo => amigo === nombreAmigo);
    if (existeAmigo) { 
        alert('¡El amigo ya se encuentra en la lista!');
        return;
    }

    listaAmigos.push(nombreAmigo);
    ulListaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
    limpiarBotonAñadir();    
    refrescarBotonSortear();
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

    setTimeout(() => {
        alert('Fin del sorteo. La pagina se refrescara para un nuevo juego'); // Se muestra un mensaje de alerta
        location.reload(); // Se recarga la página
    }, 500);
}


function actualizarListaAmigos() {
    
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

for (let amigo of listaAmigos) {
    let li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li); 
 }
}