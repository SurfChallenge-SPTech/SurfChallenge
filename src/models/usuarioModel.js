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

module.exports = {
    cadastrar,
    autenticar,
}

