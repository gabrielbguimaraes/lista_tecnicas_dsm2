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
var BarraNavegacao = /** @class */ (function (_super) {
    __extends(BarraNavegacao, _super);
    function BarraNavegacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarraNavegacao.prototype.render = function () {
        var _this = this;
        var _a = this.props, tema = _a.tema, botoes = _a.botoes;
        return (_jsx("nav", __assign({ className: "navbar navbar-expand-lg", style: { backgroundColor: tema, marginBottom: 10 } }, { children: _jsxs("div", __assign({ className: "container-fluid" }, { children: [_jsx("span", __assign({ className: "navbar-brand mb-0 h1" }, { children: "PetLovers" })), _jsx("button", __assign({ className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav" }, { children: _jsx("span", { className: "navbar-toggler-icon" }) })), _jsx("div", __assign({ className: "collapse navbar-collapse", id: "navbarNav" }, { children: _jsx("ul", __assign({ className: "navbar-nav" }, { children: botoes.map(function (botao) { return (_jsx("li", __assign({ className: "nav-item" }, { children: _jsx("a", __assign({ className: "nav-link", href: "#", onClick: function (e) { return _this.props.selectorView(botao, e); } }, { children: botao })) }), botao)); }) })) }))] })) })));
    };
    return BarraNavegacao;
}(Component));
export default BarraNavegacao;
