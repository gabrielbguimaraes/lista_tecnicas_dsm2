"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProdutoById = exports.getProdutos = exports.postProduto = exports.createProduto = void 0;
const uuid_1 = require("uuid");
let produtos = {};
// Função para criar um novo produto
const createProduto = (produtoData) => {
    if (!produtoData || !Object.keys(produtoData).length) {
        return null;
    }
    const id = (0, uuid_1.v4)();
    produtos[id] = produtoData;
    return { id, message: 'Produto cadastrado com sucesso' };
};
exports.createProduto = createProduto;
// Middleware para lidar com requisição POST
const postProduto = (req, res) => {
    const novoProduto = req.body;
    const result = (0, exports.createProduto)(novoProduto);
    if (result) {
        res.status(201).json(result);
    }
    else {
        res.status(400).json({ message: 'Invalid produto data' });
    }
};
exports.postProduto = postProduto;
// Middleware para obter todos os produtos
const getProdutos = (req, res) => {
    const allProdutos = Object.values(produtos);
    res.json(allProdutos);
};
exports.getProdutos = getProdutos;
// Middleware para obter um produto específico
const getProdutoById = (req, res) => {
    const id = req.params.id;
    const produto = produtos[id];
    if (produto) {
        res.json(produto);
    }
    else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
};
exports.getProdutoById = getProdutoById;
