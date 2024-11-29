import React from 'react';
import Produto from '../modelo/produto';

type Props = {
  produtos: Produto[];
  tema: string;
};

const ListaProdutos: React.FC<Props> = ({ produtos, tema }) => {
  return (
    <div style={{ backgroundColor: tema === 'light' ? '#fff' : '#333', color: tema === 'light' ? '#000' : '#fff' }}>
      <h2>Lista de Produtos</h2>
      <div>
        {produtos.map((produto, index) => (
          <div key={index}>
            <p><strong>{produto.nome}</strong></p>
            <p>Preço: {produto.preco}</p>
            <p>Consumo: {produto.consumoCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;
