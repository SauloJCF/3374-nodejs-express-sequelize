const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.get('/pessoas', (req, res) => pessoaController.pegarTodos(req, res));
router.post('/pessoas', (req, res) => pessoaController.criarRegistro(req, res));
router.get('/pessoas/:id', (req, res) =>
  pessoaController.pegarPeloId(req, res)
);
router.put('/pessoas/:id', (req, res) =>
  pessoaController.atualizarRegistro(req, res)
);
router.delete('/pessoas/:id', (req, res) =>
  pessoaController.excluirRegistro(req, res)
);
router.get('/pessoas/:estudanteId/matriculas', (req, res) =>
  pessoaController.pegarMatriculas(req, res)
);
router.post('/pessoas/:estudanteId/matriculas', (req, res) =>
  matriculaController.criarRegistro(req, res)
);

module.exports = router;
