var Pet = /** @class */ (function () {
    function Pet(nome, raca, genero, tipo) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }
    Object.defineProperty(Pet.prototype, "getNome", {
        get: function () { return this.nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getRaca", {
        get: function () { return this.raca; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getGenero", {
        get: function () { return this.genero; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getTipo", {
        get: function () { return this.tipo; },
        enumerable: false,
        configurable: true
    });
    return Pet;
}());
export default Pet;
