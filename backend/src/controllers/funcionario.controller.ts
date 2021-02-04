import { Request, Response } from "express";
import { ResponseInterface } from "../interfaces/response.interface";
import { RequestInterface } from "../interfaces/request.interface";
import { FuncionarioModel } from "../models/funcionario.model";
import { Funcionario } from "../classes/funcionario.class";
import { sequelize } from "../util/connection";
import { Op } from "sequelize";

// Estas variáveis servirão para retornar os dados ao front
let status: number;
let response: ResponseInterface;

// Buscar todos os funcionários
export function getFuncionarios(req: Request, res: Response) {

    const sql = `
        SELECT
            f.id,
            f.nome,
            f.sobrenome,
            f.dataNascimento,
            f.salario,
            c.descricao as cargo,
            f.createdAt,
            f.updatedAt
        FROM funcionarios f
        INNER JOIN cargos c
        ON f.CargoId = c.id
        ORDER BY f.id
    `;

    sequelize
        .query(sql)
        .then(result => {
            status = 200;
            console.log("teste")
            response = { success: true, message: "", params: { funcionarios: result[0] }}
        })
        .catch(error => {
            status = 500;
            response = { success: false, message: error, params: {} }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

// Buscar funcionário por id
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

// Cadastrar funcionário
export function postFuncionario(req: Request, res: Response) {

    const { token, userId, params } = req.body as RequestInterface;

    let date = (params.dataNascimento as string).split("/").reverse();

    // Primeiro verificar se já existe este funcionário para evitar duplicidade
    FuncionarioModel
        .findAll({
            where: {
                [Op.and]: [
                    { nome: params.nome },
                    { sobrenome: params.sobrenome }
                ]
            }
        })
        .then(result => {
            if (result.length > 0) {
                throw "Este funcionário já está cadastrado!";
            }
            
            return result;
        })
        .then(result => {
            return FuncionarioModel
                        .create({
                            nome: params.nome,
                            sobrenome: params.sobrenome,
                            dataNascimento: date,
                            salario: params.salario,
                            CargoId: params.cargoId
                        });
        })
        .then(result => {
            status = 201;
            response = { success: true, message: "Cadastro realizado com sucesso", params: { funcionario: result }}
        })
        .catch(error => {
            status = 201;
            response = {
                success: false,
                message: error,
                params: {}
            }
        })
        .finally(() => {
            res.status(status).json(response);
        });
}

// Atualizar funcionário
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
            CargoId: params.cargoId
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

// Deletar funcionário
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