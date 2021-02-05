import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection";

export const CargoModel = sequelize.define("cargo", {
    descricao: DataTypes.STRING
});