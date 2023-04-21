/*Faça um programa em JavaScript utilizando o Node.js que receba, via linha de comando, uma data no formato DD/MM/AAAA, e em seguida escreva essa data por extenso. Por exemplo, se a entrada for "11/01/2023", a saída deve ser "11 de janeiro de 2023".*/


const prompt = require('prompt-sync')();

let data = prompt('Digite uma data: ');
let separaData = data.split('/');

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


for (x = 1; x <= meses.length + 1; x++) {
    if((dia = parseInt(separaData[1])) == x) {
        console.log(`========================
  ${separaData[0]} de ${meses[x - 1]} de ${separaData[2]}
========================`);
        break;
    }
}
