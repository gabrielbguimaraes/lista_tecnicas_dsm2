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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
var FormularioCadastroPet = /** @class */ (function (_super) {
    __extends(FormularioCadastroPet, _super);
    function FormularioCadastroPet(props) {
        var _this = _super.call(this, props) || this;
        _this.handleInputChange = function (event) {
            var _a;
            var _b = event.target, name = _b.name, value = _b.value;
            _this.setState((_a = {}, _a[name] = value, _a));
        };
        _this.handleSubmit = function () {
            var _a = _this.state, nome = _a.nome, raca = _a.raca, genero = _a.genero, tipo = _a.tipo;
            _this.props.onCadastrar(nome, raca, genero, tipo); // Chama a função de cadastro
        };
        _this.state = {
            nome: '',
            raca: '',
            genero: '',
            tipo: ''
        };
        return _this;
    }
    FormularioCadastroPet.prototype.render = function () {
        var tema = this.props.tema;
        return (_jsx("div", __assign({ className: "container-fluid" }, { children: _jsxs("form", { children: [_jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", name: "nome", className: "form-control", placeholder: "Nome do Pet", onChange: this.handleInputChange }) })), _jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", name: "raca", className: "form-control", placeholder: "Ra\u00E7a do Pet", onChange: this.handleInputChange }) })), _jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", name: "genero", className: "form-control", placeholder: "G\u00EAnero do Pet", onChange: this.handleInputChange }) })), _jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", name: "tipo", className: "form-control", placeholder: "Tipo do Pet", onChange: this.handleInputChange }) })), _jsx("button", __assign({ className: "btn btn-primary", type: "button", onClick: this.handleSubmit }, { children: "Cadastrar Pet" }))] }) })));
    };
    return FormularioCadastroPet;
}(Component));
export default FormularioCadastroPet;
