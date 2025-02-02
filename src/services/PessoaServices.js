const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
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
}

module.exports = PessoaServices;
