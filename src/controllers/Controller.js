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
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegarPeloId(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.pegarPeloId(id);

      if (!registro) {
        return res.status(400).json({ message: "Registro não encontrado!" });
      }

      return res.status(200).json(registro);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async pegarTodos(req, res) {
    try {
      const listaRegistros = await this.entidadeService.pegarTodos();

      return res.status(200).json(listaRegistros);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
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
          .json({ message: "Não foi possível atualizar o registro!" });
      }
      return res
        .status(200)
        .json({ message: "Registro atualizado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async excluirRegistro(req, res) {
    try {
      const { id } = req.params;

      const foiExcluido = await this.entidadeService.excluirRegistro(
        Number(id)
      );

      if (!foiExcluido) {
        return res
          .status(400)
          .json({ message: "Não foi possível excluir o registro!" });
      }
      return res
        .status(200)
        .json({ message: "Registro excluído com sucesso!" });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = Controllers;
