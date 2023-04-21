(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_produtos')) ?? [];
}

function setLocalStorage(bd_produtos) {
  localStorage.setItem('bd_produtos', JSON.stringify(bd_produtos));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_produtos = getLocalStorage();
  let index = 0;
  for (produto of bd_produtos) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${produto.codigo}</td>
        <td>${produto.tipo}</td>
        <td>${produto.marca}</td>
        <td>${produto.cor}</td>
        <td>${produto.peso}</td>
        <td>${produto.contato}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const produto = {
    codigo: document.getElementById('codigo').value,
    tipo: document.getElementById('tipo').value,
    marca: document.getElementById('marca').value,
    cor: document.getElementById('cor').value,
    peso: document.getElementById('peso').value,
    contato: document.getElementById('contato').value 
  }
  const bd_produtos = getLocalStorage();
  bd_produtos.push(produto);
  setLocalStorage(bd_produtos);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_produtos = getLocalStorage();
  bd_produtos.splice(index, 1);
  setLocalStorage(bd_produtos);
  atualizarTabela();
}

function validarCodigo() { // Adaptação da função validar (10 pontos)
  const bd_produtos = getLocalStorage();
  for (produto of bd_produtos) {
    if (codigo.value == produto.codigo) {
      codigo.setCustomValidity("Este código já existe!");
      feedbackCodigo.innerText = "Este código já existe!";
      return false;
    } else {
      codigo.setCustomValidity("");
      feedbackCodigo.innerText = "Informe o código corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const codigo = document.getElementById("codigo");
const feedbackCodigo = document.getElementById("feedbackCodigo");
codigo.addEventListener('input', validarCodigo);