const prompt = require('prompt-sync')();

alturas = [];
// Implementar a entrada de dados
for (var i = 0; i < 10; i++) {
  alturas[i] = parseFloat(prompt("Digite a altura: "));
}
// Implementar o processamento de dados
comparacao = alturas;
// Fazer for dentro de for
for (var y = 0; y < alturas.length; y++) {
  var cont = 0;
  for (var r = 0; r < alturas.length; r++) {
    if (alturas[y] > comparacao[r]) {
      cont = cont + 1;
    }
  }
  // Implementar a saída de dados
  console.log("O Aluno", y, ": maior que", cont, "aluno(s)");
}

