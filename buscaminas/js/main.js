const selector = document.getElementById('selector');
const value = document.getElementById('value');
const tagHtml = document.getElementById('tagHtml');
const name = document.getElementById('name');

const cuadrados = document.getElementsByClassName('cuadrado');

// const elementoClickado = document.getElementsByClassName('tapa');

const arrayTapas = [...cuadrados];

// console.log(arrayTapas);

const añadirTapa = (arrayCuadrados) => {
  // console.log(arrayCuadrados);
  let arrayTapados = [];
  arrayTapados = arrayCuadrados.map((cuadrado) => {
    // console.log(cuadrado, '1');
    const tapa = document.createElement('div');
    tapa.classList.add('tapa');
    cuadrado.appendChild(tapa);
  });
  console.log(arrayTapados);
  return arrayTapados;
};

const obtenerValor = (arrayValores) => {
  console.log(arrayValores);
  for (const valor of arrayValores) {
    console.log(valor);
    valor.addEventListener('click', (event) => {
      event.preventDefault();
      selector.innerHTML = valor.classList;
      value.innerHTML = valor;
      tagHtml.innerHTML = valor.tagName;
      // console.table(valor.classList);
      valor.classList.add('selected');
    });
  }
};

obtenerValor(añadirTapa(arrayTapas));
