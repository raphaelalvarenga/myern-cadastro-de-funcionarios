import { Router } from "express";
import { getFuncionarios, getFuncionarioById, postFuncionario, putFuncionario, deleteFuncionario } from "../controllers/funcionario.controller";

const funcionarioRouter = Router();

funcionarioRouter.get("/", getFuncionarios);
funcionarioRouter.get("/:id", getFuncionarioById);
funcionarioRouter.post("/", postFuncionario);
funcionarioRouter.put("/:id", putFuncionario);
funcionarioRouter.delete("/:id", deleteFuncionario);

export default funcionarioRouter;