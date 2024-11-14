import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let valor = this.receberCpf();
        let dataEmissao = this.receberData();

        const cpf = new CPF(valor, dataEmissao);
        const cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }

    private receberCpf(): string {
        let valor: string;
        while (true) {
            valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
            if (this.validarCPF(valor)) {
                return valor;
            } else {
                console.error("Informe um CPF válido.");
            }
        }
    }

    private receberData(): Date {
        let data: string;
        while (true) {
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/');
            if (partesData.length === 3) {
                let dia = Number(partesData[0]);
                let mes = Number(partesData[1]) - 1;
                let ano = Number(partesData[2]);
                let dataEmissao = new Date(ano, mes, dia);

                // Verificando se a data é válida
                if (dataEmissao.getFullYear() === ano && dataEmissao.getMonth() === mes && dataEmissao.getDate() === dia) {
                    return dataEmissao;
                }
            }
            console.error("Data de emissão inválida. Utilize o padrão dd/mm/yyyy.");
        }
    }

    
    private validarCPF(cpf: string): boolean {
        return cpf.length === 11 && !isNaN(Number(cpf));
    }
}
