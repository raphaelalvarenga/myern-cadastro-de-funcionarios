import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection";

export const CargoModel = sequelize.define("Cargo", {
    descricao: DataTypes.STRING
});