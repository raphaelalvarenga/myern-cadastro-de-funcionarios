import express, { Application } from "express";
import cargoRouter from "../routes/cargo.route";
import bodyParser from "body-parser";
import funcionarioRouter from "../routes/funcionario.route";
import cors from "cors";

export class Server {
    private server: Application;
    private port: number;

    constructor() {
        this.server = express();
        this.port = parseInt(process.env.PORT as string) || 3000;
        this.settings();
        this.rotas();
        this.listen();
    }

    settings() {
        this.server.use(bodyParser.json());
        this.server.use(cors());
    }

    rotas() {
        this.server.use("/cargos", cargoRouter);
        this.server.use("/funcionarios", funcionarioRouter);
    }

    listen() {
        this.server.listen(this.port, () => console.log(`Aplicação funcionando na porta ${this.port}...`));
    }
}