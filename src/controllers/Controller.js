class Controllers {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegarTodos(req, res) {
    const listaRegistros = await this.entidadeService.pegarTodos();

    return res.status(200).json(listaRegistros);
  }
}

module.exports = Controllers;
