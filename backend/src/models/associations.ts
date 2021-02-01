import { Funcionario } from "../models/funcionario.model";
import { Cargo } from "../models/cargo.model";

export const associacao = () => {
    Cargo.hasOne(Funcionario);
};