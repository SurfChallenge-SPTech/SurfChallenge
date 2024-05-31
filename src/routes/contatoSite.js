var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/contatoSiteController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})