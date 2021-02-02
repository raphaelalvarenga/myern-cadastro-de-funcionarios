import { Request, Response } from "express";
import { ResponseInterface } from "../interfaces/response.interface";
import { RequestInterface } from "../interfaces/request.interface";
import { FuncionarioModel } from "../models/funcionario.model";
import { Funcionario } from "../classes/funcionario.class";

let status: number;
let response: ResponseInterface;

export function getFuncionarios(req: Request, res: Response) {
    FuncionarioModel
        .findAll()
        .then(result => {
            status = 200;
            response = { success: true, message: "", params: { funcionarios: result }}
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

export function getFuncionarioById(req: Request, res: Response) {

    const id = req.params.id;
    
    FuncionarioModel
        .findByPk(id)
        .then(result => {
            status = 200;
            response = { success: true, message: "", params: { funcionario: result }}
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

export function postFuncionario(req: Request, res: Response) {

    const { token, userId, params } = req.body as RequestInterface;

    let date = (params.dataNascimento as string).split("/").reverse();

    FuncionarioModel
        .create({
            nome: params.nome,
            sobrenome: params.sobrenome,
            dataNascimento: date,
            salario: params.salario,
            cargo: params.cargo
        })
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro realizado com sucesso", params: { funcionario: result }}
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

export function putFuncionario(req: Request, res: Response) {

    const id = req.params.id;

    const { token, userId, params } = req.body as RequestInterface;

    let date = (params.dataNascimento as string).split("/").reverse();

    FuncionarioModel
        .update({
            nome: params.nome,
            sobrenome: params.sobrenome,
            dataNascimento: date,
            salario: params.salario,
            cargo: params.cargo
        }, {
            where: { id }
        })
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro atualizado com sucesso", params: { funcionario: result }}
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

export function deleteFuncionario(req: Request, res: Response) {

    const id = req.params.id;

    FuncionarioModel
        .destroy({ where: { id }})
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro atualizado com sucesso", params: { funcionario: result }}
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}