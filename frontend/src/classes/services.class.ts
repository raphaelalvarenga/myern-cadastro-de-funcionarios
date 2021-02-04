import axios from "axios";
import { RequestInterface } from "../interfaces/request.interface";
import util from "../util/util";
import { Cargo } from "./cargo.class";
import { Funcionario } from "./funcionario.class";

let request: RequestInterface = {
    token: "um-token-qualquer",
    userId: 1,
    params: { }
}

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

    postCargo(descricao: string) {
        request = {
            ...request,
            params: {descricao}
        }
        return axios.post(`${util.api}/cargos`, request);
    }

    putCargo(cargo: Cargo) { }

    deleteCargo(id: number) {
        return axios.delete(`${util.api}/cargos/${id}`);
    }
}