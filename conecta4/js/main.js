const selector = document.getElementById('selector');
const value = document.getElementById('value');
const tagHtml = document.getElementById('tagHtml');
const nameId = document.getElementById('name');
const espacioDeJuego = document.getElementsByClassName('espacioJuego');

const arrayElementosJuego = [...espacioDeJuego];

const obtenerValor = (arrayValores) => {
  console.log(arrayValores);
  for (const valor of arrayValores) {
    valor.classList.add('noPlay');
    valor.addEventListener('click', (event) => {
      event.preventDefault();
      valor.classList.add('playedPlayer01');
      pintarValores(valor);
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
