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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./FormularioCadastroProduto";
import Produto from "../../../../atv1/src/modelo/produto";
var Roteador = /** @class */ (function (_super) {
    __extends(Roteador, _super);
    function Roteador(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tela: 'Clientes',
            clientes: [],
            pets: [],
            produtos: [],
        };
        _this.selecionarView = _this.selecionarView.bind(_this);
        _this.cadastrarProduto = _this.cadastrarProduto.bind(_this);
        return _this;
    }
    Roteador.prototype.selecionarView = function (novaTela, evento) {
        evento.preventDefault();
        this.setState({ tela: novaTela });
    };
    Roteador.prototype.cadastrarProduto = function (nome, preco) {
        var novoProduto = new Produto(nome, preco); // Cria uma nova instância de Produto
        // Adiciona o novo produto ao estado
        this.setState(function (prevState) { return ({
            produtos: __spreadArray(__spreadArray([], prevState.produtos, true), [novoProduto], false) // Atualiza o estado, adicionando o novo produto
        }); });
        console.log("Produto ".concat(nome, " cadastrado com sucesso!"));
    };
    Roteador.prototype.render = function () {
        // Renderiza componentes com base na tela selecionada
        var _a = this.state, tela = _a.tela, clientes = _a.clientes, pets = _a.pets, produtos = _a.produtos;
        var barraNavegacao = _jsx(BarraNavegacao, { seletorView: this.selecionarView, tema: "#e3f2fd", botoes: ['Clientes', 'Pets', 'Produtos'] });
        return (_jsxs(_Fragment, { children: [barraNavegacao, tela === 'Clientes' && _jsx(ListaCliente, { clientes: clientes, tema: "#e3f2fd" }), tela === 'CadastrosClientes' && _jsx(FormularioCadastroCliente, { tema: "#e3f2fd" }), tela === 'Pets' && _jsx(ListaPets, { pets: pets, tema: "#e3f2fd" }), tela === 'CadastrosPets' && _jsx(FormularioCadastroPet, { tema: "#e3f2fd", onCadastrar: this.cadastrarPet }), " ", tela === 'Produtos' && _jsx(ListaProdutos, { produtos: produtos, tema: "#e3f2fd" }), tela === 'CadastrosProdutos' && _jsx(FormularioCadastroProduto, { tema: "#e3f2fd", onCadastrar: this.cadastrarProduto }), " "] }));
    };
    return Roteador;
}(Component));
export default Roteador;
