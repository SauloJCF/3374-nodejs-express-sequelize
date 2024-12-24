const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const router = Router();
const cursoController = new CursoController();

router.get('/cursos', (req, res) => cursoController.pegarTodos(req, res));
router.post('/cursos', (req, res) => cursoController.criarRegistro(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegarPeloId(req, res));
router.put('/cursos/:id', (req, res) =>
  cursoController.atualizarRegistro(req, res)
);
router.delete('/cursos/:id', (req, res) =>
  cursoController.excluirRegistro(req, res)
);

module.exports = router;
