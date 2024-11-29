import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Pet from '../../../frontend/src/modelo/pet';

let pets: { [id: string]: Pet } = {};

export const createPet = (petData: Pet): { id: string, message: string } | null => {
    if (!petData || !Object.keys(petData).length) {
        return null;
    }

    const id = uuidv4();
    pets[id] = petData;
    return { id, message: 'Pet cadastrado com sucesso' };
};

export const postPet = (req: Request, res: Response): void => {
    const novoPet = req.body as Pet;
    const result = createPet(novoPet);

    if (result) {
        res.status(201).json(result);
    } else {
        res.status(400).json({ message: 'Invalid pet data' });
    }
};

export const getPets = (req: Request, res: Response): void => {
    const allPets = Object.values(pets);
    res.json(allPets);
};

export const getPetById = (req: Request, res: Response): void => {
    const id = req.params.id;
    const pet = pets[id];

    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ message: 'Pet não encontrado' });
    }
};
