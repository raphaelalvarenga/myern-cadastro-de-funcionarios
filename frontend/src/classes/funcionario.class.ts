export class Funcionario {
    private _id: number | null;
    private _nome: string;
    private _sobrenome: string;
    private _dataNascimento: Date;
    private _salario: number;
    private _createdAt: Date | null;
    private _updatedAt: Date | null;

    constructor(
        id: number | null, 
        nome: string, 
        sobrenome: string, 
        dataNascimento: Date, 
        salario: number, 
        createdAt: Date | null, 
        updatedAt: Date | null
    ) {
        this._id = id;
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._dataNascimento = dataNascimento;
        this._salario = salario;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt
    }

    get id() {
        return this._id;
    }

    set id(id: number | null) {
        this._id = id;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome: string) {
        this._sobrenome = sobrenome;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    set dataNascimento(dataNascimento: Date) {
        this._dataNascimento = dataNascimento;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario: number) {
        this._salario = salario;
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt: Date | null) {
        this._createdAt = createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: Date | null) {
        this._updatedAt = updatedAt;
    }
}