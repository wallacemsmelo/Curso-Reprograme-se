/*Faça um programa em JavaScript, utilizando o Node.js que receba dois números via terminal e faça a divisão do primeiro com o segundo número. Se o segundo número for 0, o programa não pode fazer o cálculo e deve avisar ao usuário que houve o erro "Divisão por zero". Para isso, você deve usar o tratamento de exceções (try...catch) para capturar o erro e informar ao usuário.*/

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um numero: '));
let n2 = parseInt(prompt('Digite outro numero: '));
let soma = 0;

try {
    if (n2 == 0) {
        throw new Error('Não pode haver Divisão por zero.');
    } else {
        soma = n1 / n2;
        console.log(`A divisão entre ${n1} e ${n2} é ${soma}`);
    }
} catch (error) {
    console.log(error.message);
}