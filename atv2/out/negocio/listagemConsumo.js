var ListagemConsumo = /** @class */ (function () {
    function ListagemConsumo(clientes, produtos, servicos) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    ListagemConsumo.prototype.listarProdutosMaisConsumidos = function () {
        console.log("\nProdutos mais consumidos:");
        var produtosOrdenados = this.produtos.sort(function (a, b) { return b.consumoCount - a.consumoCount; });
        if (produtosOrdenados.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }
        produtosOrdenados.forEach(function (produto) {
            console.log("Produto: ".concat(produto.nome, ", Consumo: ").concat(produto.consumoCount, " vezes"));
        });
    };
    ListagemConsumo.prototype.listarServicosMaisConsumidos = function () {
        console.log("\nServi\u00E7os mais consumidos:");
        var servicosOrdenados = this.servicos.sort(function (a, b) { return b.consumoCount - a.consumoCount; });
        if (servicosOrdenados.length === 0) {
            console.log("Nenhum serviço cadastrado.");
            return;
        }
        servicosOrdenados.forEach(function (servico) {
            console.log("Servi\u00E7o: ".concat(servico.nome, ", Consumo: ").concat(servico.consumoCount, " vezes"));
        });
    };
    return ListagemConsumo;
}());
export default ListagemConsumo;
