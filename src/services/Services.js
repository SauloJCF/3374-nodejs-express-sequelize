const dataSource = require('../models');

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async criarRegistro(registro) {
    return await dataSource[this.nomeModelo].create(registro);
  }

  async pegarPeloId(id) {
    return await dataSource[this.nomeModelo].findByPk(id);
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

  async excluirRegistro(id) {
    const registrosExcluidos = await dataSource[this.nomeModelo].destroy({
      where: { id: id },
    });

    return registrosExcluidos > 0;
  }
}

module.exports = Services;
