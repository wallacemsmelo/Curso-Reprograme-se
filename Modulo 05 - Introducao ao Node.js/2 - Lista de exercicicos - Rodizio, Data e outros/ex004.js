/*Escreva um arquivo JSON manualmente com os seguintes dados de pessoas fictícias: Nome completo, Endereço, Nacionalidade, Idade e Sexo. O arquivo deve ter os dados de, no mínimo, 10 pessoas. Após isso, em um programa feito em JavaScript utilizando o Node.js, converta esse arquivo JSON que você acabou de criar em um array e imprima-o na tela.*/

const fs = require('fs');

let dados = fs.readFileSync('./dados.json', 'utf-8');

let arquivo = JSON.parse(dados);

let pessoas = arquivo.pessoas;

console.log(pessoas);

   
  
