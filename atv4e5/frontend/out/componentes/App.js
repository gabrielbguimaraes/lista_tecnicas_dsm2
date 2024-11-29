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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import FormularioCadastroCliente from './formularioCadastroCliente';
import FormularioCadastroPet from './formularioCadastroPet';
import FormularioCadastroProduto from './formularioCadastroProduto';
import ListaCliente from './listaClientes';
import ListaPets from './listaPets';
import ListaProdutos from './listaProdutos';
import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import Produto from '../modelo/produto';
import CPF from '../modelo/cpf';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.navegarPara = function (tela) {
            _this.setState({ tela: tela });
        };
        _this.cadastrarCliente = function (nome, cpfValor, nomeSocial) {
            var cpf = new CPF(cpfValor, new Date());
            var novoCliente = new Cliente(nome, nomeSocial, cpf);
            _this.setState(function (prevState) { return ({
                clientes: __spreadArray(__spreadArray([], prevState.clientes, true), [novoCliente], false)
            }); });
            alert("Cliente ".concat(nome, " cadastrado com sucesso!"));
        };
        _this.cadastrarPet = function (nome, raca, genero, tipo) {
            var novoPet = new Pet(nome, raca, genero, tipo);
            _this.setState(function (prevState) { return ({
                pets: __spreadArray(__spreadArray([], prevState.pets, true), [novoPet], false)
            }); });
            alert("Pet ".concat(nome, " cadastrado com sucesso!"));
        };
        _this.cadastrarProduto = function (nome, preco) {
            var novoProduto = new Produto(nome, preco);
            _this.setState(function (prevState) { return ({
                produtos: __spreadArray(__spreadArray([], prevState.produtos, true), [novoProduto], false)
            }); });
            alert("Produto ".concat(nome, " cadastrado com sucesso!"));
        };
        _this.state = {
            tela: 'Nenhuma',
            clientes: [],
            pets: [],
            produtos: [],
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        var _a = this.state, tela = _a.tela, clientes = _a.clientes, pets = _a.pets, produtos = _a.produtos;
        var conteudo;
        switch (tela) {
            case 'CadastroClientes':
                conteudo = _jsx(FormularioCadastroCliente, { tema: "#e3f2fd", onCadastrar: this.cadastrarCliente });
                break;
            case 'CadastroPets':
                conteudo = _jsx(FormularioCadastroPet, { tema: "#e3f2fd", onCadastrar: this.cadastrarPet });
                break;
            case 'CadastroProdutos':
                conteudo = _jsx(FormularioCadastroProduto, { tema: "#e3f2fd", onCadastrar: this.cadastrarProduto });
                break;
            case 'ListaClientes':
                conteudo = _jsx(ListaCliente, { clientes: clientes, tema: "#e3f2fd" });
                break;
            case 'ListaPets':
                conteudo = _jsx(ListaPets, { pets: pets, tema: "#e3f2fd" });
                break;
            case 'ListaProdutos':
                conteudo = _jsx(ListaProdutos, { produtos: produtos, tema: "#e3f2fd" });
                break;
            default:
                conteudo = _jsx("div", { children: "Selecione uma op\u00E7\u00E3o no menu para come\u00E7ar" });
        }
        return (_jsxs(_Fragment, { children: [_jsxs(Navbar, __assign({ bg: "light", expand: "lg" }, { children: [_jsx(Navbar.Brand, __assign({ href: "#" }, { children: "Sistema C4P" })), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, __assign({ id: "basic-navbar-nav" }, { children: _jsxs(Nav, __assign({ className: "mr-auto" }, { children: [_jsx(Nav.Link, __assign({ href: "#", onClick: function () { return _this.navegarPara('CadastroClientes'); } }, { children: "Cadastro Clientes" })), _jsx(Nav.Link, __assign({ href: "#", onClick: function () { return _this.navegarPara('CadastroPets'); } }, { children: "Cadastro Pets" })), _jsx(Nav.Link, __assign({ href: "#", onClick: function () { return _this.navegarPara('CadastroProdutos'); } }, { children: "Cadastro Produtos" })), _jsx(Nav.Link, __assign({ href: "#", onClick: function () { return _this.navegarPara('ListaClientes'); } }, { children: "Listar Clientes" })), _jsx(Nav.Link, __assign({ href: "#", onClick: function () { return _this.navegarPara('ListaPets'); } }, { children: "Listar Pets" })), _jsx(Nav.Link, __assign({ href: "#", onClick: function () { return _this.navegarPara('ListaProdutos'); } }, { children: "Listar Produtos" }))] })) }))] })), _jsx(Container, __assign({ className: "mt-3" }, { children: conteudo }))] }));
    };
    return App;
}(Component));
export default App;
