export default interface Funcionario {
    id: number | null;
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
    salario: number;
    cargo: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}