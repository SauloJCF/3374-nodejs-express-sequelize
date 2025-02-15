const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegarMatriculasAtivas(req, res) {
    try {
      const { estudanteId } = req.params;

      const listaMatriculas = await pessoaServices.pegarMatriculasAtivas(
        estudanteId
      );

      if (!listaMatriculas) {
        return res.status(404).json({ message: 'Nenhum registro encontrado.' });
      }

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegarTodasMatriculas(req, res) {
    try {
      const { estudanteId } = req.params;

      const listaMatriculas = await pessoaServices.pegarTodasMatriculas(
        estudanteId
      );

      if (!listaMatriculas) {
        return res.status(404).json({ message: 'Nenhum registro encontrado.' });
      }

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
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

  async inativarEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      await pessoaServices.inativarEstudante(estudante_id);

      return res.status(200).json({
        message: `O cadastro e as matrículas do estudante ${estudante_id} foram inativados com sucesso.`,
      });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = PessoaController;
