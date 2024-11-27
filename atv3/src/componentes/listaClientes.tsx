import React from 'react';
import Cliente from '../modelo/cliente';

interface Props {
  clientes: Cliente[];
  tema: string;
}

const ListaCliente: React.FC<Props> = ({ clientes, tema }) => {
  return (
    <div className="container-fluid">
      <div className="list-group">
        {clientes.map((cliente) => (
          <a
            href="#"
            key={cliente.cpf.valor} 
            className="list-group-item list-group-item-action"
          >
            Nome: {cliente.nome}, CPF: {cliente.cpf.valor}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListaCliente;