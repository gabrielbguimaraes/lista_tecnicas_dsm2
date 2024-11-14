var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Listagem from "./listagem";
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado.");
            return;
        }
        this.clientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarTop10Clientes = function () {
        // Criando um objeto para contar o total de consumos por cliente
        var consumoPorCliente = {};
        this.clientes.forEach(function (cliente) {
            var totalConsumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            consumoPorCliente[cliente.nome] = totalConsumo;
        });
        // Convertendo o objeto em um array e ordenando
        var clientesOrdenados = Object.entries(consumoPorCliente)
            .sort(function (a, b) { return b[1] - a[1]; }) // ordenando por total de consumos em ordem decrescente
            .slice(0, 10); // selecionando os 10 primeiros
        console.log("\nTop 10 Clientes que mais consumiram:");
        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado.");
            return;
        }
        clientesOrdenados.forEach(function (cliente) {
            console.log("Cliente: ".concat(cliente[0], ", Total de Consumos: ").concat(cliente[1]));
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarTop5ClientesPorValor = function () {
        console.log("\nTop 5 Clientes que mais consumiram em valor:");
        var valorGastoPorCliente = {};
        // Calcular o total gasto por cliente
        this.clientes.forEach(function (cliente) {
            var totalGasto = cliente.getProdutosConsumidos.reduce(function (total, produto) { return total + produto.preco; }, 0) +
                cliente.getServicosConsumidos.reduce(function (total, servico) { return total + servico.preco; }, 0);
            valorGastoPorCliente[cliente.nome] = totalGasto;
        });
        // Ordenar clientes pelo valor gasto
        var clientesOrdenados = Object.entries(valorGastoPorCliente)
            .sort(function (a, b) { return b[1] - a[1]; }) // ordem decrescente
            .slice(0, 5); // Selecionar os 5 primeiros
        if (clientesOrdenados.length === 0) {
            console.log("Nenhum consumo registrado.");
            return;
        }
        clientesOrdenados.forEach(function (cliente) {
            console.log("Cliente: ".concat(cliente[0], ", Total Gasto: R$ ").concat(cliente[1].toFixed(2)));
        });
        console.log("\n");
    };
    return ListagemClientes;
}(Listagem));
export default ListagemClientes;
