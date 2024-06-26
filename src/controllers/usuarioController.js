var usuarioModel = require("../models/usuarioModel")

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var dtNascimento = req.body.dtNascimentoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var classeAtual = req.body.classeAtualServer;

    if (nome == undefined || dtNascimento == undefined || email == undefined || senha == undefined || classeAtual == undefined) {
        res.status(400).send("Preencha todos os campos!");
    }

    usuarioModel.cadastrar(nome, dtNascimento, email, senha, classeAtual).then(function (resposta) {
        res.status(200).send("Usuário criado com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idUsuario = req.body.idUsuarioServer;

    if (email == undefined) {
        res.status(400).send("Coloque o seu email");
    } else if (senha == undefined) {
        res.status(400).send("Coloque a sua senha");
    } else {

        usuarioModel.autenticar(email, senha, idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length > 0) {
                            res.json(resultadoAutenticar);

                        }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pegarIDUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.pegarIDUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    autenticar,
    pegarIDUsuario
}

