import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection";

export const FuncionarioModel = sequelize.define("Funcionario", {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    salario: DataTypes.INTEGER
});