const express = require('express');
var router = express.Router()
const multer = require('multer');

var ItemController = require('../Controller/ItemController')
var UsuarioController = require('../Controller/UsuarioController')
var CartaoController = require('../Controller/CartaoController')

router.get('/item', ItemController.findAll)
router.get('/item/:id', ItemController.findById)
router.post('/item', ItemController.create)
router.put('/item/:id', ItemController.editItem)
router.delete('/item/:id', ItemController.delete)
        
router.get('/usuario', UsuarioController.findAll)
router.get('/usuario/:id', UsuarioController.findById)
router.post('/usuario',UsuarioController.criarUsuario )
router.post('/usuario/acessar', UsuarioController.acessar)
router.put('/usuario/:id', UsuarioController.findById)
router.delete('/usuario/:id', UsuarioController.delete)

router.post('/cartao', CartaoController.gravar)
router.get('/cartao/', CartaoController.recuperar)
router.get('/cartao/listagem', CartaoController.listagem)

module.exports = router;    