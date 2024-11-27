import promptSync from "prompt-sync";
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var prompt = promptSync();
        var valor = prompt(mensagem);
        var numero = new Number(valor);
        return numero.valueOf();
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var prompt = promptSync();
        var texto = prompt(mensagem);
        return texto;
    };
    return Entrada;
}());
export default Entrada;
