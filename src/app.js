import { RecintosZoo } from "./recintos-zoo.js";

document.getElementById('zoo-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const animalSpecie = document.getElementById('animal-specie').value;
  const quantidade = parseInt(document.getElementById('quantity').value);
  const resultado = new RecintosZoo().analisaRecintos(animalSpecie, quantidade);

  const output = document.getElementById('output');
  output.innerHTML = '';

  if (resultado.erro) {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'bg-red-500 text-white p-4 rounded-md';
    errorContainer.textContent = resultado.erro;
    output.appendChild(errorContainer);
  } else {
    resultado.recintosViaveis.forEach(recinto => {
      const recintoContainer = document.createElement('div');
      recintoContainer.className = 'bg-green-500 text-white p-4 rounded-md';
      recintoContainer.textContent = recinto;
      output.appendChild(recintoContainer);
    });
  }
});
