import express, { Application } from "express";

export class Server {
    private server: Application;
    private port: number;

    constructor() {
        this.server = express();
        this.port = parseInt(process.env.PORT as string) || 3000;
        this.rotas();
        this.listen();
    }

    rotas() { }

    listen() {
        this.server.listen(this.port, () => `Aplicação funcionando na porta ${this.port}`);
    }
}