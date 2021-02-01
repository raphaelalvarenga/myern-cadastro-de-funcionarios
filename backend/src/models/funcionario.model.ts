import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection";

export const Funcionario = sequelize.define("Funcionario", {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    salario: DataTypes.INTEGER
});