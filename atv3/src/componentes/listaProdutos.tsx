import React from 'react';
import Produto from '../modelo/produto';

interface Props {
  produtos: Produto[];
  tema: string;
}

const ListaProdutos: React.FC<Props> = ({ produtos, tema }) => {
  return (
    <div className={`container-fluid list-group ${tema}`}>
      {produtos.map((produto) => (
        <button
          key={produto.id}
          className="list-group-item list-group-item-action"
          aria-label={`Ver detalhes do produto ${produto.nome}`}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{produto.nome}</h5>
            <small>R$ {produto.preco.toFixed(2)}</small>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ListaProdutos;