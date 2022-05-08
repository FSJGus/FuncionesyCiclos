//identificar elementos del DOM
let boton1 = document.getElementById('btn-1');
let boton2 = document.getElementById('btn-2');
let boton3 = document.getElementById('btn-3');
let boton4 = document.getElementById('btn-4');
let boton5 = document.getElementById('btn-5');
let boton6 = document.getElementById('btn-6');
let cajaGrande = document.getElementById('caja');

//definicion de funciones
let cambiarColor = (unBoton ) =>{
  cajaGrande.style.backgroundColor = unBoton.style.backgroundColor;
};

function myFunction(element, backgroundColor) {
  boton1.addEventListener('click', cambiarColor(element));
};


