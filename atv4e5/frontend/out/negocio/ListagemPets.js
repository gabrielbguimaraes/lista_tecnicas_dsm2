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
var ListagemPets = /** @class */ (function (_super) {
    __extends(ListagemPets, _super);
    function ListagemPets(pets) {
        var _this = _super.call(this) || this;
        _this.pets = pets;
        return _this;
    }
    ListagemPets.prototype.listar = function () {
        console.log("\nLista de todos os pets:");
        if (this.pets.length === 0) {
            console.log("Nenhum pet cadastrado.");
            return;
        }
        this.pets.forEach(function (pet) {
            console.log("Nome: ".concat(pet.getNome));
            console.log("Ra\u00E7a: ".concat(pet.getRaca));
            console.log("G\u00EAnero: ".concat(pet.getGenero));
            console.log("Tipo: ".concat(pet.getTipo));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemPets;
}(Listagem));
export default ListagemPets;
