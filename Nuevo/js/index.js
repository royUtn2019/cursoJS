//let div = document.getElementsByTagName('div');

let div = document.getElementById('miDiv');

let hijos = div.children;

// let primerHijo = div.firstElementChild

// hijos[0].style.backgroundColor = "red";

let p1 = document.getElementById('p1');
//console.log(p1);

let padre = p1.parentNode;

//console.log(padre);

//let titulo = document.getElementById('titulo');
let titulo = document.getElementsByTagName('h1')[0];
// console.log(titulo);

let hermano = titulo.nextElementSibling.nextElementSibling;

//console.log(hermano);

let body = document.body;

let ultimoHijo = body.lastElementChild;
console.log(ultimoHijo);
let h2 = ultimoHijo.previousElementSibling;

console.log(h2);


let enlace =document.createElement('a');
let texto = document.createTextNode('Ir a clarin');
enlace.appendChild(texto);
enlace.setAttribute('href', 'clarin.com');
enlace.setAttribute('target','_blank');

divEnlace.appendChild(enlace);


let enlace2 = "meter mas"
divEnlace.innerHTML = enlace2