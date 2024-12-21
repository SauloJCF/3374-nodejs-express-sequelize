class Controllers {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegarTodos(req, res) {
    try {
      const listaRegistros = await this.entidadeService.pegarTodos();

      return res.status(200).json(listaRegistros);
    } catch (error) {
      // erro
    }
  }
}

module.exports = Controllers;
