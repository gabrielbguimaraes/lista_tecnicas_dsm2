import React from 'react';
import Cliente from '../modelo/cliente';

type Props = {
  clientes: Cliente[];  // Tipando a propriedade clientes
  tema: string;         // Tipando a propriedade tema
  onDeletar: (id: number) => void;  // Função para deletar cliente
  onAtualizar: (id: number) => void;  // Função para atualizar cliente
};

const ListaClientes: React.FC<Props> = ({ clientes, tema, onDeletar, onAtualizar }) => {
    return (
      <div style={{ backgroundColor: tema === 'light' ? '#fff' : '#333', color: tema === 'light' ? '#000' : '#fff' }}>
        <h2>Lista de Clientes</h2>
        <div>
          {clientes.map((cliente, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><strong>{cliente.nome}</strong></p>
              <p>CPF: {cliente.cpf.valor}</p>
              <p>Nome Social: {cliente.nomeSocial}</p>
              <p>ID: {cliente.id}</p>
              <button onClick={() => onAtualizar(cliente.id)}>Atualizar</button>
              <button onClick={() => onDeletar(cliente.id)}>Deletar</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ListaClientes;
