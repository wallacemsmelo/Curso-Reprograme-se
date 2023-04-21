const prompt = require('prompt-sync')();
const axios = require('./api.js');

/* Opção 01 - Esta função faz o cadastro de tarefas no arquivo json */
async function cadastrarTarefas() {

    var id = prompt(`Digite o id:`);
    var descricao = prompt(`Digite a descrição da tarefa:`);
    var status = `pendente`;
    try {
        await axios.api.post('/tarefas', { id: id, descricao: descricao, status: status });
        console.log('Tarefa cadastrada com sucesso');
    } catch (erro) {
        console.log('Ocorreu um erro ao cadastrar essa tarefas');
    }
}

/* Opção 02 - Esta função altera o status da tarefa selecionada */
async function alterarTarefas() {
    var id = prompt(`Digite o id:`);
    var novadescricao = prompt(`Digite a nova descrição da tarefa:`);
    var status = 'pendente';
    try {
        await axios.api.put(`/tarefas/${id}`, { id: id, descricao: novadescricao, status: `pendente` });
        console.log('Tarefa alterada com sucesso');
    } catch (erro) {
        console.log('Ocorreu um erro ao alterar esta tarefas');
    }
}

/* Opção 03 - Esta função altera o status de "pendente" para "concluida" */
async function alterarTarefasConcluida() {
    var id = prompt(`Digite o id:`);
    var temp = await axios.api.get(`/tarefas/${id}`);
    var tarefa = temp.data.descricao;
    try {
        await axios.api.put(`/tarefas/${id}`, { id: id, descricao: tarefa, status: `concluida` });
        console.log('Status alterado como "concluida" com sucesso');
    } catch (erro) {
        console.log('Ocorreu um erro ao alterar status da tarefas');
    }
}

/* Opção 04 - Esta função remove a tarefas no arquivo json */
async function removerTarefas() {
    let id = prompt(`Digite o id:`);
    try {
        await axios.api.delete(`/tarefas/${id}`);
        console.log('Tarefa excluida com Sucesso')
    } catch (erro) {
        console.log('Ocorreu um erro ao excluir essa tarefa');
    }
}

/* Opção 05 -  Esta afunção traz as listas as tarefas Pendentes */
async function listartarefasPendentes() {
    let arrayTarefas = [];
    try {
        let response = await axios.api.get('/tarefas');
        var tabela = response.data;
        for (let x = 0; x < tabela.length; x++) {
            if (tabela[x].status == 'pendente') {
                arrayTarefas[x] = tabela[x];
            }
        }
    } catch (erro) {
        console.log('Ocorreu um erro ao buscar tarefas pendentes');
    }

    console.table(arrayTarefas);
}

/* Opção 06 - Esta função traz as listas as tarefas concluidas */
async function listarTarefasConcluidas() {
    const arrayTarefas = [];
    await axios.api.get('/tarefas')
        .then((response) => {
            var tabela = response.data;
            for (let x = 0; x < tabela.length; x++) {
                if (tabela[x].status == 'concluida') {
                    arrayTarefas[x] = tabela[x];
                }
            }
        });
    console.table(arrayTarefas);
}

/* Opção 07 - Esta função traz as listas as tarefas Pendentes */
async function listarTarefasAll() {
    await axios.api.get('/tarefas')
        .then((response) => { console.table(response.data); });
}

async function main() {
    let opcao;
    do {
        console.log(`Bem-vindo ao sistema de gerenciamento de tarefas\n
      O que você quer  fazer?
      
      1 - Cadastrar nova tarefa
      2 - Alterar uma tarefa
      3 - Marcar tarefa como concluída
      4 - Excluir uma tarefa
      5 - Listar tarefas pendentes
      6 - Listar tarefas concluídas
      7 - Listar todas tarefas cadastradas
      0 - Sair do sistema\n`);

        opcao = parseInt(prompt(`Digite a opção desejada:`));

        switch (opcao) {
            case 1:
                await cadastrarTarefas();

                prompt(`
                         
Enter para continuar...`);
                console.clear();
                break;
            case 2:
                await alterarTarefas();
                prompt(`
                
Enter para continuar...`);
                console.clear();
                break;

            case 3:
                await alterarTarefasConcluida();
                prompt(`
                
Enter para continuar...`);
                console.clear();
                break;

            case 4:
                await removerTarefas();
                prompt(`
                
Enter para continuar...`);
                console.clear();
                break;

            case 5:
                await listartarefasPendentes();
                prompt(`
                
Enter para continuar...`);
                console.clear();
                break;
            case 6:
                await listarTarefasConcluidas();
                prompt(`
                
Enter para continuar...`);
                console.clear();
                break;
            case 7:
                await listarTarefasAll();
                prompt(`
                
Enter para continuar...`);
                console.clear();
                break;
            case 0:
                console.log("Fechando sistema!");
                break;
        }

    } while (opcao !== 0);
}

main();