var usuarioModel = require("../models/usuarioModel")

function cadastrar(req, res){
    var nome = req.body.nomeServer;
    var dtNascimento = req.body.dtNascimentoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var classeAtual = req.body.classeAtualServer;
    
    if (nome == undefined || dtNascimento == undefined || email == undefined || senha == undefined || classeAtual == undefined) {
        res.status(400).send("Preencha todos os campos!");
    }

    usuarioModel.cadastrar(nome, dtNascimento, email, senha, classeAtual).then(function(resposta){
        res.status(200).send("Usuário criado com sucesso!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function autenticar(req, res) {
    usuarioModel.autenticar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar, 
    autenticar
}

