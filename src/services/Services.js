const dataSource = require('../models');

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async pegarTodos() {
    return await dataSource[this.nomeModelo].findAll();
  }
}

module.exports = Services;
