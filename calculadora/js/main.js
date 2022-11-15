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
      let valorElemento = parseInt(e.currentTarget.textContent);

      operation.push(valorElemento);
      console.log(valorElemento);
      console.log(operation);
      arrRes = operation.join('');
      historico.innerHTML = arrRes;

      console.log(parseInt(arrRes));
    });
  }
};

const obtenerSimbolo = (arraySimbolos) => {
  for (const simbolo of arraySimbolos) {
    simbolo.addEventListener('click', (e) => {
      let valorElemento = e.currentTarget.textContent;
      operation.push(valorElemento);
      historico.innerHTML = operation;
      console.log(valorElemento);
    });
  }
};

obtenerValor(botonesValor);

obtenerSimbolo(botonesSimbolo);

console.log(2 + 3);
