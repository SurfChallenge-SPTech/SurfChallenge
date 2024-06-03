var database = require("../database/config");

function registrarPontuacao (pontuacao){
    var instrucaoSQL = `
    INSERT INTO registroPalavraCruzada VALUES
    (default, ${window.sessionStorage.getItem("ID_USUARIO")}, 1, now(), ${pontuacao}');
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

module.exports = {
    registrarPontuacao
}