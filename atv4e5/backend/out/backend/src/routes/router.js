"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientesController_1 = require("../controllers/clientesController");
const produtosController_1 = require("../controllers/produtosController");
const petsController_1 = require("../controllers/petsController");
const router = express_1.default.Router();
// Rotas para clientes
router.get('/clientes', clientesController_1.getClientes);
router.post('/clientes', clientesController_1.postCliente);
// Rotas para produtos
router.get('/produtos', produtosController_1.getProdutos);
router.post('/produtos', produtosController_1.postProduto);
// Rotas para pets
router.get('/pets', petsController_1.getPets);
router.post('/pets', petsController_1.postPet);
exports.default = router;
