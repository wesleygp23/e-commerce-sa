// ================================
// ALERTA + CONTADOR DE CLIQUES
// ================================

// Seleciona todos os botões de compra
const botoes = document.querySelectorAll(".btn-comprar");

// Loop em cada botão
botoes.forEach((botao) => {
  let contador = 0;

  botao.addEventListener("click", () => {
    contador++;

    // Nome do produto
    const produto = botao.parentElement.querySelector("h3").innerText;

    // Alerta
    alert(`✅ ${produto} adicionado ao carrinho!`);

    // Criar ou atualizar contador visual
    let contadorSpan = botao.parentElement.querySelector(".contador");

    if (!contadorSpan) {
      contadorSpan = document.createElement("span");
      contadorSpan.classList.add("contador");
      botao.parentElement.appendChild(contadorSpan);
    }

    contadorSpan.innerText = `🛒 Adicionado ${contador}x`;
  });
});


// ================================
// DATA E HORA ATUAL
// ================================

function atualizarDataHora() {
  const agora = new Date();

  const dataFormatada = agora.toLocaleDateString("pt-BR");
  const horaFormatada = agora.toLocaleTimeString("pt-BR");

  const elemento = document.getElementById("data-hora");

  if (elemento) {
    elemento.innerText = `🕒 ${dataFormatada} - ${horaFormatada}`;
  }
}

// Atualiza a cada segundo
setInterval(atualizarDataHora, 1000);

// Executa na primeira vez
atualizarDataHora();