class Controllers {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async criarRegistro(req, res) {
    try {
      const registro = req.body;
      const registroCriado = await this.entidadeService.criarRegistro(registro);

      return res.status(200).json(registroCriado);
    } catch (error) {
      // erro
    }
  }

  async pegarPeloId(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.pegarPeloId(id);

      if (!registro) {
        return res.status(400).json({ message: 'Registro não encontrado!' });
      }

      return res.status(200).json(registro);
    } catch (erro) {
      // erro
    }
  }

  async pegarTodos(req, res) {
    try {
      const listaRegistros = await this.entidadeService.pegarTodos();

      return res.status(200).json(listaRegistros);
    } catch (error) {
      // erro
    }
  }

  async atualizarRegistro(req, res) {
    try {
      const { id } = req.params;
      const registroAtualizado = req.body;

      const foiAtualizado = await this.entidadeService.atualizarRegistro(
        registroAtualizado,
        Number(id)
      );

      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ message: 'Não foi possível atualizar o registro' });
      }
      return res
        .status(200)
        .json({ message: 'Registro atualizado com sucesso!' });
    } catch (error) {
      // erro
    }
  }
}

module.exports = Controllers;
