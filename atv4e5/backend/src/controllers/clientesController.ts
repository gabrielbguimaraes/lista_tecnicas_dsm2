import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Cliente from '../../../frontend/src/modelo/cliente';

// Definindo os clientes no formato {id: Cliente} (como objeto de clientes)
let clientes: { [id: string]: Cliente } = {};

// Função para criar um novo cliente
export const createCliente = (clienteData: Cliente): { id: string, message: string } | null => {
    if (!clienteData || !Object.keys(clienteData).length) {
        return null;
    }

    const id = uuidv4(); // Gerando um ID único para o cliente
    clientes[id] = clienteData; // Armazenando o cliente com o id gerado
    return { id, message: 'Cliente cadastrado com sucesso' };
};

// Função para lidar com a criação de um novo cliente (POST)
export const postCliente = (req: Request, res: Response): void => {
    const novoCliente = req.body as Cliente;
    const result = createCliente(novoCliente); // Chama a função de criação de cliente

    if (result) {
        res.status(201).json(result); // Retorna o id do cliente recém-criado
    } else {
        res.status(400).json({ message: 'Invalid cliente data' }); // Caso os dados estejam inválidos
    }
};

// Função para deletar um cliente (DELETE)
export const deleteCliente = (req: Request, res: Response): void => {
    const id = req.params.id; // Pega o ID do cliente a partir da URL
  
    // Verifica se o cliente existe
    if (clientes[id]) {
        delete clientes[id]; // Exclui o cliente do objeto
        res.status(200).json({ message: 'Cliente deletado com sucesso' }); // Retorna a mensagem de sucesso
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' }); // Caso o cliente não seja encontrado
    }
};

// Função para listar todos os clientes (GET)
export const getClientes = (req: Request, res: Response): void => {
    const allClientes = Object.values(clientes); // Pega todos os clientes armazenados
    res.json(allClientes); // Retorna todos os clientes
};

// Função para buscar um cliente pelo ID (GET)
export const getClienteById = (req: Request, res: Response): void => {
    const id = req.params.id; // Pega o ID do cliente a partir da URL
    const cliente = clientes[id]; // Busca o cliente com esse id

    if (cliente) {
        res.json(cliente); // Retorna o cliente se encontrado
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' }); // Retorna erro 404 caso não encontrado
    }
};
