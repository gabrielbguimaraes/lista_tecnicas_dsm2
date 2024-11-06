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
var FormularioCadastroCliente = /** @class */ (function (_super) {
    __extends(FormularioCadastroCliente, _super);
    function FormularioCadastroCliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormularioCadastroCliente.prototype.render = function () {
        var tema = this.props.tema;
        return (_jsx("div", __assign({ className: "container-fluid" }, { children: _jsxs("form", { children: [_jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", className: "form-control", placeholder: "Nome", "aria-label": "Nome" }) })), _jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", className: "form-control", placeholder: "Nome Social", "aria-label": "Nome social" }) })), _jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", className: "form-control", placeholder: "CPF", "aria-label": "CPF" }) })), _jsx("div", __assign({ className: "mb-3" }, { children: _jsx("input", { type: "text", className: "form-control", placeholder: "Data de Emiss\u00E3o", "aria-label": "Data de Emiss\u00E3o" }) })), _jsx("button", __assign({ className: "btn btn-primary", type: "button", style: { background: tema } }, { children: "Cadastrar" }))] }) })));
    };
    return FormularioCadastroCliente;
}(Component));
export default FormularioCadastroCliente;
