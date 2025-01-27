const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();
class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async pegarPorEstudante(req, res) {
    const estudanteId = req.params.estudanteId;
    try {
      const registros = await this.entidadeService.pegarPorEstudante(
        Number(estudanteId)
      );

      if (!registros) {
        return res.status(404).json({ message: 'Nenhum registro encontrado!' });
      }

      return res.status(200).json(registros);
    } catch (error) {
      return res.status(500).body({ erro: error.message });
    }
  }
}

module.exports = MatriculaController;
