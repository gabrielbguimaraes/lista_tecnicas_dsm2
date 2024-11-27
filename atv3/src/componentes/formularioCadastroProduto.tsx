import React, { useState } from 'react';

interface FormularioCadastroProdutoProps {
  tema: string;
  onCadastrar: (nome: string, preco: number) => void;
}

const FormularioCadastroProduto: React.FC<FormularioCadastroProdutoProps> = ({ tema, onCadastrar }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState<number | ''>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'preco':
        setPreco(parseFloat(value) || '');
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (typeof preco === 'number') {
      onCadastrar(nome, preco);
      setNome('');
      setPreco('');
    }
  };

  return (
    <div style={{ backgroundColor: tema, padding: '20px', borderRadius: '5px' }}>
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={handleChange}
          />
        </label>
        <label>
          Preço:
          <input
            type="number"
            name="preco"
            value={preco}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormularioCadastroProduto;