import axios from "axios";
import util from "../util/util";

export class Service {
    getFuncionarios() {
        return axios.get(`${util.api}/funcionarios`);
    }

    deleteFuncionario(id: number) {
        return axios.delete(`${util.api}/funcionarios/${id}`);
    }
}