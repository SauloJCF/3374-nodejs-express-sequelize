const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegarMatriculas(req, res) {
    try {
      const { estudanteId } = req.params;

      const listaMatriculas = await pessoaServices.pegarMatriculas(estudanteId);

      if (!listaMatriculas) {
        return res.status(404).json({ message: 'Nenhum registro encontrado.' });
      }

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).body({ erro: error.message });
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasPessoas = await pessoaServices.pegaPessoasEscopoTodas();

      if (!listaTodasPessoas) {
        return res.status(404).json({ message: 'Nenhum registro encontrado.' });
      }

      return res.status(200).json(listaTodasPessoas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = PessoaController;
