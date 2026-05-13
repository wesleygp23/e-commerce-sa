// =====================================
// ELEMENTOS
// =====================================

const botoesComprar = document.querySelectorAll(".btn-comprar");
const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

const btnTema = document.getElementById("toggle-tema");

const campoBusca = document.getElementById("campo-busca");
const btnBuscar = document.getElementById("btn-buscar");

const containerAPI = document.getElementById("produtos-api");

// =====================================
// TOAST
// =====================================

function mostrarMensagem(texto) {

  const toast = document.createElement("div");

  toast.classList.add("toast");

  toast.innerText = texto;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);

}

// =====================================
// COMPRAR PRODUTO
// =====================================

botoesComprar.forEach((botao) => {

  let contador = 0;

  botao.addEventListener("click", () => {

    contador++;

    const produto =
      botao.parentElement.querySelector("h3").innerText;

    mostrarMensagem(`${produto} adicionado ao carrinho!`);

    let contadorSpan =
      botao.parentElement.querySelector(".contador");

    if (!contadorSpan) {

      contadorSpan = document.createElement("span");

      contadorSpan.classList.add("contador");

      botao.parentElement.appendChild(contadorSpan);

    }

    contadorSpan.innerText =
      `🛒 Adicionado ${contador}x`;

  });

});

// =====================================
// DATA E HORA
// =====================================

function atualizarDataHora() {

  const agora = new Date();

  const data =
    agora.toLocaleDateString("pt-BR");

  const hora =
    agora.toLocaleTimeString("pt-BR");

  document.getElementById("data-hora").innerText =
    `🕒 ${data} - ${hora}`;

}

setInterval(atualizarDataHora, 1000);

atualizarDataHora();

// =====================================
// DARK MODE
// =====================================

const temaSalvo =
  localStorage.getItem("tema");

if (temaSalvo === "dark") {
  document.body.classList.add("dark-mode");
}

btnTema.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const temaAtual =
    document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";

  localStorage.setItem("tema", temaAtual);

});

// =====================================
// DETALHES
// =====================================

botoesDetalhes.forEach((botao) => {

  botao.addEventListener("click", () => {

    const detalhes =
      botao.nextElementSibling;

    detalhes.classList.toggle("ativo");

  });

});

// =====================================
// BUSCA
// =====================================

btnBuscar.addEventListener("click", () => {

  const valor =
    campoBusca.value.trim();

  if (valor === "") {

    mostrarMensagem("Digite algo para buscar!");

    return;

  }

  mostrarMensagem(`Busca realizada: ${valor}`);

});

// =====================================
// API - FAKE STORE
// =====================================

async function buscarProdutosAPI() {

  try {

    const resposta =
      await fetch("https://fakestoreapi.com/products");

    const produtos =
      await resposta.json();

    exibirProdutosAPI(produtos);

  } catch (erro) {

    console.error(erro);

    containerAPI.innerHTML =
      "<p>Erro ao carregar produtos.</p>";

  }

}
// =====================================
// TRADUÇÃO DOS PRODUTOS DA API
// =====================================

function traduzirProduto(nome) {

  const traducoes = {

    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops":
      "Mochila Premium para Notebook",

    "Mens Casual Premium Slim Fit T-Shirts":
      "Camiseta Masculina Premium",

    "Mens Cotton Jacket":
      "Jaqueta Masculina de Algodão",

    "Mens Casual Slim Fit":
      "Camiseta Masculina Casual"

  };

  return traducoes[nome] || nome;

}


// =====================================
// TRADUÇÃO DAS DESCRIÇÕES
// =====================================

function traduzirDescricao(descricao) {

  if (descricao.includes("perfect pack")) {
    return "Mochila perfeita para uso diário com espaço para notebook.";
  }

  if (descricao.includes("Slim-fitting style")) {
    return "Camiseta masculina premium com modelagem moderna e confortável.";
  }

  if (descricao.includes("outerwear jackets")) {
    return "Jaqueta masculina ideal para dias frios e ocasiões casuais.";
  }

  if (descricao.includes("color could be slightly")) {
    return "Produto confortável com ótimo acabamento e visual moderno.";
  }

  if (descricao.includes("USB 3.0")) {
    return "HD externo portátil ideal para armazenamento seguro.";
  }

  if (descricao.includes("Easy upgrade")) {
    return "SSD moderno de alta velocidade para melhor desempenho.";
  }

  return "Produto premium com alta qualidade e excelente acabamento.";

}
function exibirProdutosAPI(produtos) {

  containerAPI.innerHTML = "";

  produtos.slice(0, 4).forEach((produto) => {

    const card =
      document.createElement("article");

    card.classList.add("produto");

    card.innerHTML = `
      <img src="${produto.image}" alt="${produto.title}">
      <h3>${traduzirProduto(produto.title)}</h3>
      <p>${traduzirDescricao(produto.description).substring(0, 80)}...</p>
      <span class="preco">R$ ${produto.price}</span>
      <button class="btn-comprar">Comprar</button>
    `;

    containerAPI.appendChild(card);

  });

}

buscarProdutosAPI();


// =====================================
// CLEAN CODE
// =====================================

/*

PRINCÍPIOS DE CLEAN CODE APLICADOS:

1. NOMES SIGNIFICATIVOS:
Variáveis e funções foram nomeadas
de forma clara para facilitar
a leitura e manutenção.

2. RESPONSABILIDADE ÚNICA:
Cada função possui apenas uma responsabilidade.

3. ORGANIZAÇÃO:
Código separado em blocos
comentados para melhor compreensão.

4. REUTILIZAÇÃO:
A função mostrarMensagem()
evita repetição de código.

5. TRATAMENTO DE ERROS:
Uso de try/catch no consumo da API.

O QUE PODE MELHORAR:

- Modularização em múltiplos arquivos JS
- Implementação de carrinho real
- Melhor acessibilidade dinâmica
- Melhorias de performance
- Integração com backend real

*/