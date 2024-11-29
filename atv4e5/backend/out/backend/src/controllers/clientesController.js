"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClienteById = exports.getClientes = exports.postCliente = exports.createCliente = void 0;
const uuid_1 = require("uuid");
let clientes = {};
// Lógica para criar um novo cliente
const createCliente = (clienteData) => {
    if (!clienteData || !Object.keys(clienteData).length) {
        return null;
    }
    const id = (0, uuid_1.v4)();
    clientes[id] = clienteData;
    return { id, message: 'Cliente cadastrado com sucesso' };
};
exports.createCliente = createCliente;
// Middleware para lidar com requisição POST
const postCliente = (req, res) => {
    const novoCliente = req.body;
    const result = (0, exports.createCliente)(novoCliente);
    if (result) {
        res.status(201).json(result);
    }
    else {
        res.status(400).json({ message: 'Invalid cliente data' });
    }
};
exports.postCliente = postCliente;
// Middleware para obter todos os clientes
const getClientes = (req, res) => {
    const allClientes = Object.values(clientes);
    res.json(allClientes);
};
exports.getClientes = getClientes;
// Middleware para obter um cliente específico
const getClienteById = (req, res) => {
    const id = req.params.id;
    const cliente = clientes[id];
    if (cliente) {
        res.json(cliente);
    }
    else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
};
exports.getClienteById = getClienteById;
