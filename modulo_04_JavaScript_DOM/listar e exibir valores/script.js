var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var select_animais = document.querySelector("#select_animais");
// Selecionar elemento 'container' ( 1 ponto)
var pai_container = document.querySelector("#container");
// Selecionar elemento 'nome' ( 1 ponto)
const nome = document.getElementById('nome');
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select_animais.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
pai_container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
pai_container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)

  limparDivContainer();

  if (select_animais.value === "dog") {
    //Criar elementos do tipo <img src=./img/....
    for (var i = 0; i < 4; i++) {
      const div = document.createElement("img");
      div.alt = cachorros[i].nome;
      div.id = cachorros[i].nome;
      // Fazer com que os elementos img sejam filhos do elemento 'container'
      div.className = "linha";
      div.src = `./img/${cachorros[i].imagem}.jpg`;
      pai_container.appendChild(div);
    }
  } else {
    // Criar elementos do tipo <img src=./img/....
    for (var i = 0; i < 4; i++) {
      const div = document.createElement("img");
      div.alt = gatos[i].nome;
      div.id = gatos[i].nome;
      // Fazer com que os elementos img sejam filhos do elemento 'container'
      div.className = "linha";
      div.src = `./img/${gatos[i].imagem}.jpg`;
      pai_container.appendChild(div);
    }
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = e.target.alt;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var limpar = document.querySelector("#container");
  while (limpar.firstChild) {
    limpar.removeChild(limpar.firstChild);
  }
}