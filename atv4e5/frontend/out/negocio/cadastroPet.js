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
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";
var CadastroPet = /** @class */ (function (_super) {
    __extends(CadastroPet, _super);
    function CadastroPet(pets) {
        var _this = _super.call(this) || this;
        _this.pets = pets;
        _this.entrada = new Entrada();
        return _this;
    }
    CadastroPet.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do pet");
        var nome = this.entrada.receberTexto("Por favor informe o nome do pet: ");
        var raca = this.entrada.receberTexto("Por favor informe a ra\u00E7a do pet: ");
        var genero = this.entrada.receberTexto("Por favor informe o g\u00EAnero do pet: ");
        var tipo = this.entrada.receberTexto("Por favor informe o tipo do pet (ex: c\u00E3o, gato, etc.): ");
        var pet = new Pet(nome, raca, genero, tipo);
        this.pets.push(pet);
        console.log("\nCadastro do pet conclu\u00EDdo :)\n");
    };
    return CadastroPet;
}(Cadastro));
export default CadastroPet;
