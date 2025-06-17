// Simulando dados que poderiam vir de uma API
const dadosSalas = [
  { nome: ' ', pontos:  },
  { nome: '', pontos:  },
  { nome: ' ', pontos:  },
  { nome: ' ', pontos:  }
];

// Ordena e exibe
dadosSalas.sort((a, b) => b.pontos - a.pontos);

const lista = document.getElementById('lista-salas');
dadosSalas.forEach((sala, index) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1}º - ${sala.nome} - ${sala.pontos} pontos`;
  lista.appendChild(li);
});
