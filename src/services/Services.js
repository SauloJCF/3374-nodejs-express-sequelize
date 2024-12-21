const dataSource = require('../models');

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async criarRegistro(registro) {
    return await dataSource[this.nomeModelo].create(registro);
  }

  async pegarTodos() {
    return await dataSource[this.nomeModelo].findAll();
  }

  async atualizarRegistro(registroAtualizado, id) {
    const listaRegistrosAtualizados = await dataSource[this.nomeModelo].update(
      registroAtualizado,
      { where: { id: id } }
    );

    return listaRegistrosAtualizados[0] > 0;
  }
}

module.exports = Services;
