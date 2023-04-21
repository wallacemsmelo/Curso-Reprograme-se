var aprovados = 0;
var reprovados = 0;

exports.avaliaAluno = function avaliaAluno(nota){
    if(nota >= 60){
        aprovados = aprovados + 1;
    }else{
        reprovados = reprovados + 1;
    }

    return [aprovados, reprovados];
}

exports.retornaAprovados = function retornaAprovados(array){
    return array[0];
}

exports.retornaReprovados = function retornaReprovados(array){
    return array[1];
}