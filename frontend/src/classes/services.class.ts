import axios from "axios";
import { RequestInterface } from "../interfaces/request.interface";
import util from "../util/util";
import Cargo from "../interfaces/cargo.interface";
import Funcionario from "../interfaces/funcionario.interface";

let request: RequestInterface = {
    token: "um-token-qualquer",
    userId: 1,
    params: { }
}

export class Service {
    getFuncionarios() {
        return axios.get(`${util.api}/funcionarios`);
    }

    getFuncionarioById(id: number) {
        return axios.get(`${util.api}/funcionarios/${id}`)
    }

    postFuncionario(newFuncionario: Funcionario) {
        request = {
            ...request,
            params: {
                nome: newFuncionario.nome,
                sobrenome: newFuncionario.sobrenome,
                dataNascimento: newFuncionario.dataNascimento,
                salario: newFuncionario.salario,
                cargoId: newFuncionario.cargoId
            }
        }
        return axios.post(`${util.api}/funcionarios`, request)
    }

    putFuncionario(funcionario: Funcionario) {
        return axios.put(`${util.api}/funcionarios/${funcionario.id}`, funcionario)
    }

    deleteFuncionario(id: number) {
        return axios.delete(`${util.api}/funcionarios/${id}`);
    }

    getCargos() {
        return axios.get(`${util.api}/cargos`);
    }

    getCargoById(id: number) {
        return axios.get(`${util.api}/cargos/${id}`)
    }

    postCargo(cargo: Cargo) {
        request = {
            ...request,
            params: {descricao: cargo.descricao}
        }
        return axios.post(`${util.api}/cargos`, request);
    }

    putCargo(cargo: Cargo) {
        request = {
            ...request,
            params: {
                descricao: cargo.descricao
            }
        }
        return axios.put(`${util.api}/cargos/${cargo.id}`, request)
    }

    deleteCargo(id: number) {
        return axios.delete(`${util.api}/cargos/${id}`);
    }
}