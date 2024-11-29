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
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new Entrada();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do produto");
        var nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var preco = this.entrada.receberNumero("Por favor informe o pre\u00E7o do produto: ");
        var produto = new Produto(nome, preco);
        this.produtos.push(produto);
        console.log("\nCadastro do produto conclu\u00EDdo :)\n");
    };
    return CadastroProduto;
}(Cadastro));
export default CadastroProduto;
