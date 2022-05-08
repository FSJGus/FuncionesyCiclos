
//identificacion de botones en el DOM
var botonSumar = document.querySelector('#btn-sumar');
// let botonSumar = document.getElementById('btn-sumar');
var botonRestar = document.querySelector('#btn-restar');
var borrar = document.querySelector("#borrar");
var cajaResultado = document.querySelector('.resultado');

// Se calcula la suma
const calcularSuma = ()=>{
  let elDato1 = document.querySelector('#valor1').value;
  let elDato2 = document.querySelector('#valor2').value;
  // let elDato1 = document.getElementById('valor1').value;
  let elResultado =  parseInt(elDato1) + parseInt(elDato2);

  let cajaResultado = document.querySelector('.resultado');
  // let cajaResultado = document.getElementByClass('resultado');
  cajaResultado.innerHTML = elResultado;

  
};

// Se calcula la resta
const calcularResta = () => {
  let elDato1 = document.querySelector('#valor1').value;
  let elDato2 = document.querySelector('#valor2').value;
  // let elDato1 = document.getElementById('valor1').value;
  let elResultado =  (elDato1 - elDato2);

  // if(elResultado < 0){
  //   elResultado = 0;
  // }

  let cajaResultado = document.querySelector('.resultado');
  // let cajaResultado = document.getElementByClass('resultado');
  cajaResultado.innerHTML = elResultado;

};



const borrarTodo = () => {
  location.reload();
}

//Agregamos eventListener
botonSumar.addEventListener('click', calcularSuma);
botonRestar.addEventListener('click', calcularResta);
botonReiniciar.addEventListener('click', borrarTodo);