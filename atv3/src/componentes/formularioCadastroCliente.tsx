import React, { useState } from 'react';

interface Props {
  tema: string;
  onCadastrar: (nome: string, cpf: string, nomeSocial: string) => void;
}

const FormularioCadastroCliente = ({ tema, onCadastrar }: Props) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'cpf':
        setCpf(value);
        break;
      case 'nomeSocial':
        setNomeSocial(value);
        break;
      default:
        break;
    }
  };

  const submitForm = () => {
    onCadastrar(nome, cpf, nomeSocial);
    setNome('');
    setCpf('');
    setNomeSocial('');
  };

  return (
    <div style={{ backgroundColor: tema, padding: '20px', borderRadius: '5px' }}>
      <h2>Cadastrar Cliente</h2>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={nome}
        onChange={handleChange}
        style={{ margin: '5px' }}
      />
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={cpf}
        onChange={handleChange}
        style={{ margin: '5px' }}
      />
      <input
        type="text"
        name="nomeSocial"
        placeholder="Nome Social"
        value={nomeSocial}
        onChange={handleChange}
        style={{ margin: '5px' }}
      />
      <button onClick={submitForm}>Cadastrar Cliente</button>
    </div>
  );
};

export default FormularioCadastroCliente;