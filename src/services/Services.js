const db = require('../database/models');

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

  async pegarUm(where) {
    return await this.dataSource[this.nomeModelo].findOne({
      where: { ...where },
    });
  }

  async pegarTodosRegistrosPorEscopo(escopo) {
    return await this.dataSource[this.nomeModelo].scope(escopo).findAll();
  }

  async pegarTodos() {
    return await this.dataSource[this.nomeModelo].findAll();
  }

  async atualizarRegistro(registroAtualizado, where, transacao = {}) {
    const listaRegistrosAtualizados = await this.dataSource[
      this.nomeModelo
    ].update(registroAtualizado, {
      where: { ...where },
      transaction: transacao,
    });

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
