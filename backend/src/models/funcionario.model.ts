import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection";

export const FuncionarioModel = sequelize.define("funcionario", {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    salario: DataTypes.INTEGER
});