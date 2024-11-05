export default class Servico {
    public nome: string;
    public preco: number;
    public consumoCount: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
        this.consumoCount = 0;
    }
}