const prompt = require('prompt-sync')();
var array_produtos = [];

function listar_produto() {
  // Implementar corpo da função
  for (i = 0; i < array_produtos.length; i++) {
    console.log(array_produtos[i].codigo, " : ", array_produtos[i].tipo, " - ", array_produtos[i].marca, " - ", array_produtos[i].cor, " - ", array_produtos[i].peso);
  }
}
function inserir_produto(produto) {
  // Implementar corpo da função
  array_produtos.push(produto);
}
function excluir_produto(codigo) {
  // Implementar corpo da função
  for (i = 0; i < array_produtos.length; i++) {
    if (array_produtos[i].codigo == codigo) {
      array_produtos.splice(i, 1);
    }
  }
}
do {
  console.log("CADASTRO DE CIMENTOS PORTLAND");
  console.log("1 - Inserir Produto");
  console.log("2 - Excluir Produto");
  console.log("3 - Listar Produtos");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Produto...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    console.log("====================\nTIPOS DE CIMENTO\nCPI - Cimento Portland Comum\nCPII - Cimento Portland Composto\nCPIII - Cimento Portland de Alto-Forno\nCPIV - Cimento Portland Pozolânico\n====================");
    let tipo = prompt("Digite o Tipo: "); console.log("====================\nMARCAS\nVotoran\nNassau\nCiplan\nMizu\nCauê\n====================")
    let marca = prompt("Digite o Marca: ");
    console.log("====================\nTONALIDADE\nCinza Claro\nCinza Escuro\n====================")
    let cor = prompt("Digite o Cor: "); console.log("====================\nPESO\n20KG\n50KG\n====================")
    let peso = prompt("Digite o Peso: ");

    // Neste trecho estamos declarando um objeto
    const produto = {
      codigo: codigo,
      tipo: tipo,
      marca: marca,
      cor: cor,
      peso: peso
    }
    // Chamar a função inserir
    inserir_produto(produto);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Produto...\n");
    let codigo = prompt("Digite o código do produto: ");
    // Chamar a função excluir

    excluir_produto(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Produtos...\n");
    // Chamar a função listar
    listar_produto(array_produtos);
  } else {
    console.log("\n\nSaindo do programa...\n");
  }
  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)