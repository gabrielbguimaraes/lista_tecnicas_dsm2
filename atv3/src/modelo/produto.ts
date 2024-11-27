import { Key } from "react";

export default class Produto {
    public nome: string;
    public preco: number;
    public consumoCount: number;
    id: Key | null | undefined;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
        this.consumoCount = 0; 
    }
}