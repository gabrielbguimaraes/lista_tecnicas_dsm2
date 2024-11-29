import express from 'express';
import { getClientes, postCliente, deleteCliente } from '../controllers/clientesController';
import { getProdutos, postProduto } from '../controllers/produtosController';
import { getPets, postPet } from '../controllers/petsController';

const router = express.Router();

// Rotas para clientes
router.get('/clientes', getClientes);
router.post('/clientes', postCliente);
router.delete('/clientes/:id', deleteCliente);

// Rotas para produtos
router.get('/produtos', getProdutos);
router.post('/produtos', postProduto);

// Rotas para pets
router.get('/pets', getPets);
router.post('/pets', postPet);

export default router;
