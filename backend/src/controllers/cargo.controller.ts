import { CargoModel } from "../models/cargo.model";
import { Cargo } from "../classes/cargo.class";
import { Request, Response } from "express";
import { ResponseInterface } from "../interfaces/response.interface";
import { RequestInterface } from "../interfaces/request.interface";

// Estas variáveis servirão para retornar os dados ao front
let status: number;
let response: ResponseInterface;

// Buscar todos os cargos
export function getCargos(req: Request, res: Response) {
    CargoModel
        .findAll()
        .then(result => {
            status = 200;
            response = { success: true, message: "", params: {cargos: result} }
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

// Buscar cargo por id
export function getCargosById(req: Request, res: Response) {

    const id = req.params.id;

    CargoModel
        .findByPk(id)
        .then(result => {
            status = 200;
            response = { success: true, message: "", params: {cargos: result} }
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });

}

// Cadastrar cargo
export function postCargo(req: Request, res: Response) {

    const { token, userId, params } = req.body as RequestInterface;

    // Primeiro verificar se já existe este cargo para evitar duplicidade
    CargoModel
        .findAll({
            where: {
                descricao: params.descricao
            }
        })
        .then(result => {
            if (result.length > 0) {
                throw "Este cargo já está cadastrado";
            }

            return CargoModel
                .create({ descricao: params.descricao })
        })
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro realizado com sucesso!", params: result }
        })
        .catch(error => {
            status = 201;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

// Atualizar cargo
export function putCargo(req: Request, res: Response) {

    const id = req.params.id;
    const { token, userId, params } = req.body as RequestInterface;

    CargoModel
        .update(
            { descricao: params.descricao },
            { where: { id } }
        )
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro atualizado com sucesso!", params: {result} }
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
    
}

// Deletar cargo
export function deleteCargo(req: Request, res: Response) {

    const id = req.params.id;

    CargoModel
        .destroy({
            where: { id }
        })
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro atualizado com sucesso!", params: {result} }
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
    
}