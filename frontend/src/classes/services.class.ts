import axios from "axios";
import util from "../util/util";
import { Cargo } from "./cargo.class";
import { Funcionario } from "./funcionario.class";

export class Service {
    getFuncionarios() {
        return axios.get(`${util.api}/funcionarios`);
    }

    getFuncionarioById(id: number) { }

    postFuncionario(newFuncionario: Funcionario) { }

    putFuncionario(funcionario: Funcionario) { }

    deleteFuncionario(id: number) {
        return axios.delete(`${util.api}/funcionarios/${id}`);
    }

    getCargos() {
        return axios.get(`${util.api}/cargos`);
    }

    getCargoById(id: number) { }

    postCargo(newCargo: Cargo) { }

    putCargo(cargo: Cargo) { }

    deleteCargo(id: number) {
        return axios.delete(`${util.api}/cargos/${id}`);
    }
}