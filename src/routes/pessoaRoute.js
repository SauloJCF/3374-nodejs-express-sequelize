const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();
const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.pegarTodos(req, res));
router.post('/pessoas', (req, res) => pessoaController.criarRegistro(req, res));
router.put('/pessoas/:id', (req, res) =>
  pessoaController.atualizarRegistro(req, res)
);

module.exports = router;
