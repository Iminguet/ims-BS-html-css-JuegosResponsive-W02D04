const selector = document.getElementsByClassName('selector');
const value = document.getElementById('value');
const tagHtml = document.getElementById('tagHtml');
const nameId = document.getElementById('name');
const espacioDeJuego = document.getElementsByClassName('espacioJuego');

// const elementoClickado = document.getElementsByClassName('tapa');

const arrayElementosJuego = [...espacioDeJuego];

// console.log(arrayTapas);

const obtenerValor = (arrayValores) => {
  console.log(arrayValores);
  for (const valor of arrayValores) {
    valor.classList.add('noPlay');
    valor.addEventListener('click', (event) => {
      event.preventDefault();
      value.innerHTML = valor;
      tagHtml.innerHTML = valor.tagName;
      nameId.innerHTML = valor.id;
      valor.classList.add('playedPlayer01');
      selector.innerHTML = valor.classList;
    });
  }
};

obtenerValor(arrayElementosJuego);
