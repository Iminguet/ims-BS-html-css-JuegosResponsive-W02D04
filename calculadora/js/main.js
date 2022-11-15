'use-strict';
const historico = document.getElementById('historico');
const operacion = document.getElementById('historico');
const mostrar = document.getElementById('mostrar');
const botonBorrar = document.getElementById('borrar');
const botonResultado = document.getElementById('resultado');

const botonesValor = document.getElementsByClassName('valor');
const botonesSimbolo = document.getElementsByClassName('simbolo');
const botones = document.getElementsByClassName('boton');

const operation = [];
let arrRes = [];

const obtenerValor = (arrayValores) => {
  for (const valor of arrayValores) {
    valor.addEventListener('click', (e) => {
      let valorElemento = e.currentTarget.textContent;
      incluirEnArray(valorElemento);
      historico.innerHTML = arrRes;
    });
  }
};

// const obtenerSimbolo = (arraySimbolos) => {
//   for (const simbolo of arraySimbolos) {
//     simbolo.addEventListener('click', (e) => {
//       let valorElemento = e.currentTarget.textContent;
//       incluirEnArray(valorElemento);
//       historico.innerHTML = arrRes;
//     });
//   }
// };

const incluirEnArray = (elem) => {
  operation.push(elem);
  arrRes = operation.join('');
};

obtenerValor(botonesValor);

// obtenerSimbolo(botonesSimbolo);

obtenerValor(botonesSimbolo);

console.log(2 + 3);
