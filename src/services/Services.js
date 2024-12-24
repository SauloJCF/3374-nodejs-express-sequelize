const db = require('../models');

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
    this.dataSource = db;
  }

  async criarRegistro(registro) {
    return await this.dataSource[this.nomeModelo].create(registro);
  }

  async pegarPeloId(id) {
    return await this.dataSource[this.nomeModelo].findByPk(id);
  }

  async pegarTodos() {
    return await this.dataSource[this.nomeModelo].findAll();
  }

  async atualizarRegistro(registroAtualizado, id) {
    const listaRegistrosAtualizados = await this.dataSource[
      this.nomeModelo
    ].update(registroAtualizado, { where: { id: id } });

    return listaRegistrosAtualizados[0] > 0;
  }

  async excluirRegistro(id) {
    const registrosExcluidos = await this.dataSource[this.nomeModelo].destroy({
      where: { id: id },
    });

    return registrosExcluidos > 0;
  }
}

module.exports = Services;
