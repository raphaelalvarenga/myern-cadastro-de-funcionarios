import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection";

export const Cargo = sequelize.define("Cargo", {
    descricao: DataTypes.STRING
});