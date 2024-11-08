import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Roteador from './componentes/roteador';
var clientes = [];
var pets = [];
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(React.StrictMode, { children: _jsx(Roteador, { clientes: clientes, pets: pets }) }));
reportWebVitals();
