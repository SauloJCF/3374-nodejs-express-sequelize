const Services = require('./Services.js');

class MatriculaServices extends Services {
  constructor() {
    super('Matricula');
  }

  async pegarPorEstudante(estudanteId) {
    console.log(this.dataSource);

    return await this.dataSource[this.nomeModelo].findAll({
      where: {
        estudante_id: estudanteId,
      },
    });
  }
}

module.exports = MatriculaServices;
