var maiorNota = 0;
var maiorNome = " ";
var menorNota = 0;
var menorNome = " ";

exports.maiorMenorNota = function maiorMenorNota(nome, nota, x) {
    if (x == 1) {
        maiorNota = nota;
        menorNota = maiorNota;
        maiorNome = nome;
        menorNome = nome;
    } else {
        if (nota > maiorNota) {
            if (nota < menorNota) {
                menorNota = maiorNota;
            }
            maiorNota = nota;
            maiorNome = nome;
        }
        if (nota < menorNota) {
            menorNota = nota;
            menorNome = nome;
        }
    }
    return [maiorNome, maiorNota, menorNota, menorNome];
}

exports.retornaMaiorNome = function retornaMaiorNome(array){
    return array[0];
}

exports.retornaMaiorNota = function retornaMaiorNota(array){
    return array[1];
}

exports.retornaMenorNota = function retornaMenorNota(array){
    return array[2];
}

exports.retornaMenorNome = function retornaMenorNome(array){
    return array[3]
}