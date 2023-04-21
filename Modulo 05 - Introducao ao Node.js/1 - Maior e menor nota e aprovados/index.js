const prompt = require('prompt-sync')();
const resultado = require('./functions/resultado.js');
const mediaNotas = require('./functions/mediaNotas.js');
const avaliacao = require('./functions/avaliacao.js');

var array = [];
var avaliar = [];
var media = 0;

for (x = 1; x <= 10; x++) {
    const nome = prompt("Digite o nome do " + x + "º aluno: ");
    const nota = parseFloat(prompt("Digite a nota do " + x + "º aluno: "));

    array = resultado.maiorMenorNota(nome, nota, x);
    mediaNotas.mediaNotas(nota);
    avaliar = avaliacao.avaliaAluno(nota);
}

console.log(`\n======= Reultados dos Alunos ==========`);
console.log(`${resultado.retornaMaiorNome(array)} tirou a maior nota ${resultado.retornaMaiorNota((array))}`);
console.log(`${resultado.retornaMenorNome(array)} tirou a menor nota ${resultado.retornaMenorNota(array)}`);
console.log(`A média das notas dos alunos foi ${mediaNotas.mediaNotas(media)}`);
console.log(`${avaliacao.retornaAprovados(avaliar)} alunos foram aprovados`);
console.log(`${avaliacao.retornaReprovados(avaliar)} alunos foram reprovados`);