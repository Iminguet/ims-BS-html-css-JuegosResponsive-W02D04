const selector = document.getElementById('selector');
const value = document.getElementById('value');
const tagHtml = document.getElementById('tagHtml');
const nameId = document.getElementById('name');
const espacioDeJuego = document.getElementsByClassName('cuadrado');

const elementoTapa = document.getElementsByClassName('tapa');

const arrayElementosJuego = [...espacioDeJuego];

const añadirTapa = (arrayCuadrados) => {
  let arrayTapados = [];
  let id = 0;

  arrayTapados = arrayCuadrados.map((cuadrado) => {
    const tapa = document.createElement('div');
    tapa.classList.add('tapa');
    tapa.setAttribute('id', `numero${id}`);
    cuadrado.appendChild(tapa);
    id++;
    console.log(tapa);
  });

  return arrayTapados;
};

const quitarTapa = (arrayTapas) => {
  for (const tapa of arrayTapas) {
    tapa.addEventListener('click', (event) => {
      event.preventDefault();
      tapa.classList.add('selected');
      pintarValores(tapa);
    });
  }
};
const obtenerValor = (arrayValores) => {
  console.log(arrayValores);
  for (const valor of arrayValores) {
    valor.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }
};
const pintarValores = (valor) => {
  value.innerHTML = valor;
  tagHtml.innerHTML = valor.tagName;
  nameId.innerHTML = valor.id;
  selector.innerHTML = valor.classList;
};

obtenerValor(arrayElementosJuego);
añadirTapa(arrayElementosJuego);
quitarTapa(elementoTapa);
