/* ex001.js - Com base nas informações abaixo sobre o rodízio de veículos, faça um programa em JavaScript, utilizando o Node.js, que receba via linha de comando a placa de um determinado veículo e, baseado no dia da semana em que o programa está sendo executado, determine se esse veículo pode ou não estar em circulação. Para obter o dia da semana, pesquise sobre a classe Date do JavaScript. */

const prompt = require('prompt-sync')();

const semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
let data = new Date();
let dia = semana[data.getDay()];
let placa = prompt('Digite a placa do Veiculo: ');
let final = placa[placa.length - 1];

console.log('===============================================');

if (dia == semana[6] || dia == semana[0]) {
    console.log('Todos veículos tem permissão de circulação!');
}
else if ((final == '1' || final == '2') && dia == semana[1]) {
    console.log('Veículos com placa Final [1] ou [2] - NÃO tem permissão circulação!');
}
else if ((final == '3' || final == '4') && dia == semana[2]) {
    console.log('Veículos com placa Final [3] ou [4] - NÃO tem permissão circulação!');
}
else if ((final == '5' || final == '6') && dia == semana[3]) {
    console.log('Veículos com placa Final [5] ou [6] - NÃO tem permissão circulação!');
}
else if ((final == '7' || final == '8') && dia == semana[4]) {
    console.log('Veículos com placa Final [7] ou [8] - NÃO tem permissão circulação!');
}
else if ((final == '9' || final == '0') && dia == semana[5]) {
    console.log('Veículos com placa Final [9] ou [0] - NÃO tem permissão circulação!');
}
else {
    console.log('Veículo tem permissão circulação!');
}

console.log('============================================');
