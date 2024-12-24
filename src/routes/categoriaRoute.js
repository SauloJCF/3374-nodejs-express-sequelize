const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const router = Router();
const categoriaController = new CategoriaController();

router.get('/categorias', (req, res) =>
  categoriaController.pegarTodos(req, res)
);
router.post('/categorias', (req, res) =>
  categoriaController.criarRegistro(req, res)
);
router.get('/categorias/:id', (req, res) =>
  categoriaController.pegarPeloId(req, res)
);
router.put('/categorias/:id', (req, res) =>
  categoriaController.atualizarRegistro(req, res)
);
router.delete('/categorias/:id', (req, res) =>
  categoriaController.excluirRegistro(req, res)
);

module.exports = router;
