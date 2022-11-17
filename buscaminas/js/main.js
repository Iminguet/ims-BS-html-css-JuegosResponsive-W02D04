const selector = document.getElementById('selector');
const value = document.getElementById('value');
const tagHtml = document.getElementById('tagHtml');
const name = document.getElementById('name');

const elementoClickado = document.getElementsByClassName('tapa');

const obtenerValor = (arrayValores) => {
  for (const valor of arrayValores) {
    valor.addEventListener('click', (e) => {
      console.log(valor);
      valor.classList.add('selected');
    });
  }
};

obtenerValor(elementoClickado);
