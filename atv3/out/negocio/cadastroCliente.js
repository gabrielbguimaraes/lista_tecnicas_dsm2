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
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new Entrada();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var valor = this.receberCpf();
        var dataEmissao = this.receberData();
        var cpf = new CPF(valor, dataEmissao);
        var cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    CadastroCliente.prototype.receberCpf = function () {
        var valor;
        while (true) {
            valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do CPF: ");
            if (this.validarCPF(valor)) {
                return valor;
            }
            else {
                console.error("Informe um CPF válido.");
            }
        }
    };
    CadastroCliente.prototype.receberData = function () {
        var data;
        while (true) {
            data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do CPF, no padr\u00E3o dd/mm/yyyy: ");
            var partesData = data.split('/');
            if (partesData.length === 3) {
                var dia = Number(partesData[0]);
                var mes = Number(partesData[1]) - 1;
                var ano = Number(partesData[2]);
                var dataEmissao = new Date(ano, mes, dia);
                // Verificando se a data é válida
                if (dataEmissao.getFullYear() === ano && dataEmissao.getMonth() === mes && dataEmissao.getDate() === dia) {
                    return dataEmissao;
                }
            }
            console.error("Data de emissão inválida. Utilize o padrão dd/mm/yyyy.");
        }
    };
    CadastroCliente.prototype.validarCPF = function (cpf) {
        return cpf.length === 11 && !isNaN(Number(cpf));
    };
    return CadastroCliente;
}(Cadastro));
export default CadastroCliente;
