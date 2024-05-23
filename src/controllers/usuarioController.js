var usuarioModel = require("../models/usuarioModel")

function cadastrar(req, res){
    var nomeUsuario = req.body.nomeUsuarioServer;
    var dataNasc = req.body.dataNascServer;
    var classeAtual = req.body.classeAtualServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senha = req.body.senhaServer;

    usuarioModel.cadastrar(nomeUsuario, dataNasc, classeAtual, emailUsuario, senha)

    .then( function (resposta)
        {
            res.json(resposta)
        }
    )
    .catch(function (respostaErro)
    {
        console.log(respostaErro)
    })
}

