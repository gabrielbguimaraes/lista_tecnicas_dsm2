import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class RegistroConsumo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    public registrarProduto(produto: Produto): void {
        this.cliente.getProdutosConsumidos.push(produto);
        produto.consumoCount++;
        console.log(`Produto "${produto.nome}" registrado ao cliente.`);
    }
    
    public registrarServico(servico: Servico): void {
        this.cliente.getServicosConsumidos.push(servico);
        servico.consumoCount++;
        console.log(`Serviço "${servico.nome}" registrado ao cliente.`);
    }
}
