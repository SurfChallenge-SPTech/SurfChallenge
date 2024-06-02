var database = require("../database/config");

function usuariosCategoria() {
    console.log("ACESSEI AS PERGUNTAS  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
    classeAtual.nome, 
    COUNT(usuario.idUsuario) AS qtdUsuariosClasse,
    (SELECT COUNT(*) FROM usuario) AS totalUsuarios
FROM 
    classeAtual
LEFT JOIN 
    usuario ON classeAtual.idClasseAtual = usuario.fkClasseAtual
GROUP BY 
    classeAtual.idClasseAtual, classeAtual.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    usuariosCategoria
}