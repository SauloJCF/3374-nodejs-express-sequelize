"use strict";
const { Model } = require("sequelize");
const isValidCPF = require('../../utils/validadorCPFHelper.js');

module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: "docente_id",
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        scope: { status: "matriculado" },
        as: "aulasMatriculadas",
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        as: "todasAulasMatriculadas",
      });
    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: 'Nome deve conter de 3 a 30 caracteres!'
          }
        }
      },
      email: { 
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Formato do e-mail inválido!'
          },
        }
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          validaCPF: (cpf) => {
            if (!isValidCPF(cpf)) throw new Error("CPF inválido!");
          }
        }
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        todosOsRegistros: {
          where: {},
        },
      },
    }
  );
  return Pessoa;
};
