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
import { Component } from 'react';
var FormularioCadastroPet = /** @class */ (function (_super) {
    __extends(FormularioCadastroPet, _super);
    function FormularioCadastroPet(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var _a;
            var _b = event.target, name = _b.name, value = _b.value;
            _this.setState((_a = {}, _a[name] = value, _a));
        };
        _this.submitForm = function () {
            var _a = _this.state, nome = _a.nome, raca = _a.raca, genero = _a.genero, tipo = _a.tipo;
            _this.props.onCadastrar(nome, raca, genero, tipo);
            _this.setState({ nome: '', raca: '', genero: '', tipo: '' });
        };
        _this.state = {
            nome: '',
            raca: '',
            genero: '',
            tipo: '',
        };
        return _this;
    }
    FormularioCadastroPet.prototype.render = function () {
        return (_jsxs("div", __assign({ style: { backgroundColor: this.props.tema, padding: '20px', borderRadius: '5px' } }, { children: [_jsx("h2", { children: "Cadastrar Pet" }), _jsx("input", { type: "text", name: "nome", placeholder: "Nome do Pet", value: this.state.nome, onChange: this.handleChange, style: { margin: '5px' } }), _jsx("input", { type: "text", name: "raca", placeholder: "Ra\u00E7a", value: this.state.raca, onChange: this.handleChange, style: { margin: '5px' } }), _jsx("input", { type: "text", name: "genero", placeholder: "G\u00EAnero", value: this.state.genero, onChange: this.handleChange, style: { margin: '5px' } }), _jsx("input", { type: "text", name: "tipo", placeholder: "Tipo", value: this.state.tipo, onChange: this.handleChange, style: { margin: '5px' } }), _jsx("button", __assign({ onClick: this.submitForm }, { children: "Cadastrar Pet" }))] })));
    };
    return FormularioCadastroPet;
}(Component));
export default FormularioCadastroPet;
