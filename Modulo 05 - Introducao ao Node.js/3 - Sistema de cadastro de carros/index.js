const prompt = require('prompt-sync')();
const fs = require('fs');

/* Função Listar carros ========================== */
async function listarCarros() {
  let carros = await obterCarros();
  let tabela = JSON.parse(carros).carros;

  console.table(tabela);
}

/* Função remover carros cadastrados ======================== */
async function removeCarros() {
  let carros = await obterCarros();
  let tabela = JSON.parse(carros).carros;
  
  tabela.pop(tabela);

  var json = JSON.stringify({ carros: tabela });

  return new Promise((resolve, reject) => {
    fs.writeFile('./carros.json', json, (erro) => {

      if (erro) {
        reject(erro);
      }

      resolve('Carro Removido com sucesso!');
    });
  });
}

/* Função cadastrar carros ======================== */
async function cadastrarCarros() {

  let placa = prompt('Digite a placa do carros: ');
  let nome = prompt('Digite o nome do carro: ');
  let montadora = prompt('Digite a montadora: ');

  const carro = { placa: placa, nome: nome, montadora: montadora };

  try {
    let carros = await obterCarros();
    let lista = JSON.parse(carros).carros;

    adicionarCarros(lista, carro);
  } catch (erro) {

  }

}

function adicionarCarros(lista, carro) {

  lista.push(carro);
  var json = JSON.stringify({ carros: lista });

  return new Promise((resolve, reject) => {
    fs.writeFile('./carros.json', json, (erro) => {

      if (erro) {
        reject(erro);
      }

      resolve('Carro adicionado com sucesso!');
    });
  });
}

function obterCarros() {
  return new Promise((resolve, reject) => {
    fs.readFile('./carros.json', 'utf-8', (erro, data) => {

      if (erro) {
        reject(erro)
      }

      resolve(data);
    })
  });
}

/*================== Main ============================ */
async function main() {

  let opcao;

  do {
    console.log(`Sistemas de cadastro de carros

    1 - Listar Carros Cadastrados
    2 - Cadastrar Novo Carro
    3 - Remover carro Cadastrado
    0 - Sair do sistema\n`);

    opcao = parseInt(prompt(`Digite a opção de desejada: `));

    switch (opcao) {
      case 1:
        await listarCarros();
        prompt(`
        
Enter para continuar...`);
        console.clear();
        break;
      case 2:
        await cadastrarCarros();
        prompt(`
        
Enter para continuar...`);
        console.clear();
        break;
      case 3:
        await removeCarros();
        prompt(`
        
Enter para continuar...`);
        console.clear();
        break;
      case 0:
        console.log('Saiu');
        break;
      default:
        console.log('Entrada inválida');
        break;
    }
  } while (opcao !== 0);
}

main();
