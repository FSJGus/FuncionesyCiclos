let box = document.getElementById('box0');
box.addEventListener('click', function(){
  alert("Hiciste Click sobre el boton");
});

let ejer1 = document.getElementById('ej1');
ejer1.addEventListener('click', function(){
   window.open('ejercicio1.html');
});

let ejer2 = document.getElementById('ej2');
ejer2.addEventListener('click', function(){
   window.open('ejercicio2.html');
});

let ejer3 = document.getElementById('ej3');
ejer3.addEventListener('click', function(){
   // cuando se quiere que abra en una ventana nueva ---- window.open('ejercicio3.html', '_blank');
   window.open('ejercicio3.html');
});






