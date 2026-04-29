// ================================
// BOTÃO COMPRAR + CONTADOR
// ================================

const botoes = document.querySelectorAll(".btn-comprar");

botoes.forEach((botao) => {
  let contador = 0;

  botao.addEventListener("click", () => {
    contador++;

    const produto = botao.parentElement.querySelector("h3").innerText;

    alert(`✅ ${produto} adicionado ao carrinho!`);

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
// DATA E HORA
// ================================

function atualizarDataHora() {
  const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR");

  const elemento = document.getElementById("data-hora");

  if (elemento) {
    elemento.innerText = `🕒 ${data} - ${hora}`;
  }
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();


// ================================
// MODO ESCURO
// ================================

const btnTema = document.getElementById("toggle-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// ================================
// MOSTRAR / ESCONDER DETALHES
// ================================

const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

botoesDetalhes.forEach((btn) => {
  btn.addEventListener("click", () => {
    const detalhes = btn.nextElementSibling;

    detalhes.classList.toggle("ativo");
  });
});


// ================================
// BUSCA DE PRODUTOS
// ================================

const campoBusca = document.getElementById("campo-busca");
const btnBuscar = document.getElementById("btn-buscar");

btnBuscar.addEventListener("click", () => {
  const valor = campoBusca.value.trim();

  if (valor === "") {
    alert("⚠️ Digite algo para buscar!");
    return;
  }

  alert(`🔎 Você buscou por: "${valor}"`);
});