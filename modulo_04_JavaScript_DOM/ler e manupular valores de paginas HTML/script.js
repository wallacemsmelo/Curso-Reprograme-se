// Selecionar todos elementos da classe 'produto_preco'
var tabela = document.getElementsByClassName("produto_preco");
var total = 0;
// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
for (var i = 0; i < tabela.length; i++){
  var preco = parseFloat(tabela[i].innerText);
  total = total + preco;
}
// Escrever no conteúdo da página o valor da soma
document.write("Total: R$ " + total);