import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado.");
            return;
        }

        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarTop10Clientes(): void {
        // Criando um objeto para contar o total de consumos por cliente
        const consumoPorCliente: {[key: string]: number} = {};

        this.clientes.forEach(cliente => {
            const totalConsumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            consumoPorCliente[cliente.nome] = totalConsumo;
        });

        // Convertendo o objeto em um array e ordenando
        const clientesOrdenados = Object.entries(consumoPorCliente)
            .sort((a, b) => b[1] - a[1]) // ordenando por total de consumos em ordem decrescente
            .slice(0, 10); // selecionando os 10 primeiros

        console.log(`\nTop 10 Clientes que mais consumiram:`);
        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado.");
            return;
        }

        clientesOrdenados.forEach((cliente) => {
            console.log(`Cliente: ${cliente[0]}, Total de Consumos: ${cliente[1]}`);
        });

        console.log(`\n`);
    }
    public listarTop5ClientesPorValor(): void {
        console.log(`\nTop 5 Clientes que mais consumiram em valor:`);
    
        const valorGastoPorCliente: { [key: string]: number } = {};
    
        // Calcular o total gasto por cliente
        this.clientes.forEach(cliente => {
            const totalGasto = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0) +
                               cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
            valorGastoPorCliente[cliente.nome] = totalGasto;
        });
    
        // Ordenar clientes pelo valor gasto
        const clientesOrdenados = Object.entries(valorGastoPorCliente)
            .sort((a, b) => b[1] - a[1]) // ordem decrescente
            .slice(0, 5); // Selecionar os 5 primeiros
    
        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado.");
            return;
        }
    
        clientesOrdenados.forEach(cliente => {
            console.log(`Cliente: ${cliente[0]}, Total Gasto: R$ ${cliente[1].toFixed(2)}`);
        });
    
        console.log(`\n`);
    }
}