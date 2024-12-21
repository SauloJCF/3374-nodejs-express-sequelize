const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();
const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.pegarTodos(req, res));

module.exports = router;
