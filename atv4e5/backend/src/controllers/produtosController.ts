import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import  Produto  from '../../../frontend/src/modelo/produto';

let produtos: { [id: string]: Produto } = {};

// Função para criar um novo produto
export const createProduto = (produtoData: Produto): { id: string, message: string } | null => {
    if (!produtoData || !Object.keys(produtoData).length) {
        return null;
    }

    const id = uuidv4();
    produtos[id] = produtoData;
    return { id, message: 'Produto cadastrado com sucesso' };
};

// Middleware para lidar com requisição POST
export const postProduto = (req: Request, res: Response): void => {
    const novoProduto = req.body as Produto;
    const result = createProduto(novoProduto);

    if (result) {
        res.status(201).json(result);
    } else {
        res.status(400).json({ message: 'Invalid produto data' });
    }
};

// Middleware para obter todos os produtos
export const getProdutos = (req: Request, res: Response): void => {
    const allProdutos = Object.values(produtos);
    res.json(allProdutos);
};

// Middleware para obter um produto específico
export const getProdutoById = (req: Request, res: Response): void => {
    const id = req.params.id;
    const produto = produtos[id];

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
};
