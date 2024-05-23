var express = require("express");
var router = express.router();

var usuarioController = require("../controllers/usuarioController");

//Criar rotas

router.post("/cadastrar",function (req, res){
    usuarioController.cadastrar(req,res)
}) 

// pode ser exportado 
module.exports = router 

