var RegistroConsumo = /** @class */ (function () {
    function RegistroConsumo(cliente) {
        this.cliente = cliente;
    }
    RegistroConsumo.prototype.registrarProduto = function (produto) {
        this.cliente.getProdutosConsumidos.push(produto);
        produto.consumoCount++;
        console.log("Produto \"".concat(produto.nome, "\" registrado ao cliente."));
    };
    RegistroConsumo.prototype.registrarServico = function (servico) {
        this.cliente.getServicosConsumidos.push(servico);
        servico.consumoCount++;
        console.log("Servi\u00E7o \"".concat(servico.nome, "\" registrado ao cliente."));
    };
    return RegistroConsumo;
}());
export default RegistroConsumo;
