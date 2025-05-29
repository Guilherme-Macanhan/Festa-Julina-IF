// Simulando dados que poderiam vir de uma API
const dadosSalas = [
  { nome: 'Sala 2A', pontos: 120 },
  { nome: 'Sala 3B', pontos: 95 },
  { nome: 'Sala 1C', pontos: 80 },
  { nome: 'Sala 4D', pontos: 110 }
];

// Ordena e exibe
dadosSalas.sort((a, b) => b.pontos - a.pontos);

const lista = document.getElementById('lista-salas');
dadosSalas.forEach((sala, index) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1}º - ${sala.nome} - ${sala.pontos} pontos`;
  lista.appendChild(li);
});
