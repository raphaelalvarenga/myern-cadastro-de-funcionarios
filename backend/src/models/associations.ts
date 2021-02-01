import { FuncionarioModel } from "../models/funcionario.model";
import { CargoModel } from "../models/cargo.model";

export const associacao = () => {
    CargoModel.hasOne(FuncionarioModel);
};