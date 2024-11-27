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
import { Navbar, Nav, Container } from 'react-bootstrap';
var BarraNavegacao = /** @class */ (function (_super) {
    __extends(BarraNavegacao, _super);
    function BarraNavegacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarraNavegacao.prototype.render = function () {
        var _a = this.props, tema = _a.tema, botoes = _a.botoes, onClickBotao = _a.onClickBotao;
        return (_jsx(Navbar, __assign({ bg: tema, expand: "lg", fixed: "top" }, { children: _jsxs(Container, { children: [_jsx(Navbar.Brand, __assign({ href: "#home" }, { children: "PetShop" })), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, __assign({ id: "basic-navbar-nav" }, { children: _jsx(Nav, __assign({ className: "me-auto" }, { children: botoes.map(function (botao) { return (_jsx(Nav.Link, __assign({ href: "#", onClick: function (e) { return onClickBotao(botao, e); } }, { children: botao }), botao)); }) })) }))] }) })));
    };
    return BarraNavegacao;
}(Component));
export default BarraNavegacao;
