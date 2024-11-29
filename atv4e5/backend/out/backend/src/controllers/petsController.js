"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetById = exports.getPets = exports.postPet = exports.createPet = void 0;
const uuid_1 = require("uuid");
let pets = {};
// Função para criar um novo pet
const createPet = (petData) => {
    if (!petData || !Object.keys(petData).length) {
        return null;
    }
    const id = (0, uuid_1.v4)();
    pets[id] = petData;
    return { id, message: 'Pet cadastrado com sucesso' };
};
exports.createPet = createPet;
// Middleware para lidar com requisição POST
const postPet = (req, res) => {
    const novoPet = req.body;
    const result = (0, exports.createPet)(novoPet);
    if (result) {
        res.status(201).json(result);
    }
    else {
        res.status(400).json({ message: 'Invalid pet data' });
    }
};
exports.postPet = postPet;
// Middleware para obter todos os pets
const getPets = (req, res) => {
    const allPets = Object.values(pets);
    res.json(allPets);
};
exports.getPets = getPets;
// Middleware para obter um pet específico
const getPetById = (req, res) => {
    const id = req.params.id;
    const pet = pets[id];
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).json({ message: 'Pet não encontrado' });
    }
};
exports.getPetById = getPetById;
