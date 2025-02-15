const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.get('/pessoas', (req, res) => pessoaController.pegarTodos(req, res));
router.get('/pessoas/todos', (req, res) =>
  pessoaController.pegaTodasAsPessoas(req, res)
);
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
  pessoaController.pegarMatriculasAtivas(req, res)
);
router.get('/pessoas/:estudanteId/matriculas/todos', (req, res) =>
  pessoaController.pegarTodasMatriculas(req, res)
);
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) =>
  matriculaController.pegarUm(req, res)
);
router.post('/pessoas/:estudante_id/matriculas', (req, res) =>
  matriculaController.criarRegistro(req, res)
);
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) =>
  matriculaController.atualizarRegistro(req, res)
);
router.put('/pessoas/:estudante_id/inativar', (req, res) =>
  pessoaController.inativarEstudante(req, res)
);
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) =>
  matriculaController.excluirRegistro(req, res)
);

module.exports = router;
