export default class CPF {
    public valor: string;
    private dataEmissao: Date;

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    public get getValor(): string {
        return this.valor;
    }

    public get getDataEmissao(): Date {
        return this.dataEmissao;
    }

    // Método para formatar o CPF no formato XXX.XXX.XXX-XX
    public formatado(): string {
        return this.valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}
