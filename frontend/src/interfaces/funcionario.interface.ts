export default interface Funcionario {
    id: number | null;
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    salario: number;
    CargoId: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}