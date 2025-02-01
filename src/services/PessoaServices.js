const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegarMatriculas(estudanteId) {
    const estudante = await super.pegarPeloId(estudanteId);

    return await estudante.getAulasMatriculadas();
  }

  async pegaPessoasEscopoTodas() {
    return super.pegarTodosRegistrosPorEscopo('todosOsRegistros');
  }
}

module.exports = PessoaServices;
