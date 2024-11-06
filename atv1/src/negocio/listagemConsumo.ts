import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";

export default class ListagemConsumo {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public listarProdutosMaisConsumidos(): void {
        console.log(`\nProdutos mais consumidos:`);

        const produtosOrdenados = this.produtos.sort((a, b) => b.consumoCount - a.consumoCount);

        if (produtosOrdenados.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }

        produtosOrdenados.forEach(produto => {
            console.log(`Produto: ${produto.nome}, Consumo: ${produto.consumoCount} vezes`);
        });
    }

    public listarServicosMaisConsumidos(): void {
        console.log(`\nServiços mais consumidos:`);

        const servicosOrdenados = this.servicos.sort((a, b) => b.consumoCount - a.consumoCount);
        
        if (servicosOrdenados.length === 0) {
            console.log("Nenhum serviço cadastrado.");
            return;
        }

        servicosOrdenados.forEach(servico => {
            console.log(`Serviço: ${servico.nome}, Consumo: ${servico.consumoCount} vezes`);
        });
    }
}