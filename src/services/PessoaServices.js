const Services = require('./Services.js');
const dataSource = require('../database/models');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaService = new Services('Matricula');
  }

  async pegarMatriculasAtivas(estudanteId) {
    const estudante = await super.pegarPeloId(estudanteId);

    return await estudante.getAulasMatriculadas();
  }

  async pegarTodasMatriculas(estudanteId) {
    const estudante = await super.pegarPeloId(estudanteId);

    return await estudante.getTodasAulasMatriculadas();
  }

  async pegaPessoasEscopoTodas() {
    return super.pegarTodosRegistrosPorEscopo('todosOsRegistros');
  }

  async inativarEstudante(estudanteId) {
    return dataSource.sequelize.transaction(async (transacao) => {
      await super.atualizarRegistro(
        { ativo: false },
        { id: estudanteId },
        transacao
      );

      await this.matriculaService.atualizarRegistro(
        { status: 'cancelado' },
        { estudante_id: estudanteId },
        transacao
      );
    });
  }
}

module.exports = PessoaServices;
