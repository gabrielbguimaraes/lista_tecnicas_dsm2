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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
var ListaPets = /** @class */ (function (_super) {
    __extends(ListaPets, _super);
    function ListaPets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListaPets.prototype.render = function () {
        var _a = this.props, pets = _a.pets, tema = _a.tema;
        return (_jsx("div", __assign({ className: "container-fluid" }, { children: _jsx("div", __assign({ className: "list-group" }, { children: pets.map(function (pet) { return (_jsxs("a", __assign({ href: "#", className: "list-group-item list-group-item-action" }, { children: ["Nome: ", pet.getNome, ", Ra\u00E7a: ", pet.getRaca, ", Tipo: ", pet.getTipo] }), pet.nome)); }) })) })));
    };
    return ListaPets;
}(Component));
export default ListaPets;
