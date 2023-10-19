//Ativar os links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativor");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento.

const parametros = new URLSearchParams(loca.search);

function ativarProduto(parametro){
  console.log(parametro);
}

parametros.forEach(ativarProduto);

