import React, { useState } from 'react';

interface FormularioCadastroPetProps {
  tema: string;
  onCadastrar: (nome: string, raca: string, genero: string, tipo: string) => void;
}

const FormularioCadastroPet: React.FC<FormularioCadastroPetProps> = ({ tema, onCadastrar }) => {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGenero] = useState('');
  const [tipo, setTipo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'raca':
        setRaca(value);
        break;
      case 'genero':
        setGenero(value);
        break;
      case 'tipo':
        setTipo(value);
        break;
      default:
        console.error('Campo desconhecido:', name);
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCadastrar(nome, raca, genero, tipo);
    setNome('');
    setRaca('');
    setGenero('');
    setTipo('');
  };

  return (
    <div className="formulario-pet" style={{ backgroundColor: tema, padding: '20px', borderRadius: '5px' }}>
      <h2>Cadastrar Pet</h2>
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
          Raça:
          <input
            type="text"
            name="raca"
            value={raca}
            onChange={handleChange}
          />
        </label>
        <label>
          Gênero:
          <input
            type="text"
            name="genero"
            value={genero}
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={tipo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormularioCadastroPet;