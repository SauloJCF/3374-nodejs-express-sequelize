const database = require('../models');
class PessoaController {
  static async pegarTodos(req, res) {
    try {
      const pessoas = await database.Pessoa.findAll();
      console.log('Aqui');

      return res.status(200).json(pessoas);
    } catch (error) {}
  }
}

module.exports = PessoaController;
