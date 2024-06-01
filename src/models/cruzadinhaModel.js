var database = require("../database/config");

function listarPerguntas() {
    console.log("ACESSEI AS PERGUNTAS  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT * FROM palavraCruzada 
    JOIN perguntaResposta 
    ON palavraCruzada.idPalavraCruzada = perguntaResposta.fkPalavraCruzada
    WHERE palavraCruzada.idPalavraCruzada = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarRespostas() {
    console.log("ACESSEI AS PERGUNTAS  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT * FROM palavraCruzada 
    JOIN perguntaResposta 
    ON palavraCruzada.idPalavraCruzada = perguntaResposta.fkPalavraCruzada
    WHERE palavraCruzada.idPalavraCruzada = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarPontuacao (pontuacao){
    var instrucaoSQL = `
    INSERT INTO registroPalavraCruzada (pontuacao) VALUES
    ('${pontuacao}');
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

module.exports = {
    listarPerguntas,
    listarRespostas,
    registrarPontuacao
}