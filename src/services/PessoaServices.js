const Services = require('./Services.js');

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
    await super.atualizarRegistro({ ativo: false }, { id: estudanteId });

    await this.matriculaService.atualizarRegistro(
      { status: 'cancelado' },
      { estudante_id: estudanteId }
    );
  }
}

module.exports = PessoaServices;
