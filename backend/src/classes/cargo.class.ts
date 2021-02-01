export class Cargo {
    private _id: number | null;
    private _descricao: string;
    private _createdAt: Date | null;
    private _updatedAt: Date | null;

    constructor(id: number | null, descricao: string, createdAt: Date | null, updatedAt: Date | null) {
        this._id = id;
        this._descricao = descricao;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt
    }

    get id() {
        return this.id;
    }

    set id(id: number | null) {
        this.id = id;
    }

    get descricao() {
        return this.descricao;
    }

    set descricao(descricao: string) {
        this.descricao = descricao;
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