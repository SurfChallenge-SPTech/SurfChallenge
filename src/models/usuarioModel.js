var database = require("../database/config")

function cadastrar (nome, dtNascimento, email, senha, classeAtual){
    var instrucaoSQL = `
    INSERT INTO usuario (nome, dtNascimento, email, senha, fkClasseAtual) VALUES
    ('${nome}', '${dtNascimento}', '${email}', '${senha}', '${classeAtual}');
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function autenticar(email, senha) {
    var instrucaoSQL = `
    SELECT idUsuario, nome, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';`
    
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
    
}

function pegarIDUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT idUsuario FROM usuario 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    autenticar,
    pegarIDUsuario
}

