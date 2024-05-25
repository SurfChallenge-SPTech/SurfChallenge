var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Criar rotas

router.post("/cadastrar",function (req, res){
    // função a se chamada quando acessar /usuario/cadastrar
    usuarioController.cadastrar(req,res)
}) 

// pode ser exportado 
module.exports = router;




