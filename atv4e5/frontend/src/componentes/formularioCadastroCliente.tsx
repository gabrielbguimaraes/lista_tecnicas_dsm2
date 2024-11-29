import React from 'react';
import axios from 'axios';
import CPF from '../modelo/cpf';

type Props = {
  tema: string;
  onCadastrar: (nome: string, cpf: CPF, nomeSocial: string, id: number) => void;
};

const FormularioCadastroCliente: React.FC<Props> = ({ tema, onCadastrar }) => {
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [nomeSocial, setNomeSocial] = React.useState('');
  const [id, setId] = React.useState(0);
  const [dataEmissao, setDataEmissao] = React.useState(''); // Estado para a data de emissão

  const handleSubmit = async () => {
    const dataEmissaoDate = new Date(dataEmissao);
    if (isNaN(dataEmissaoDate.getTime())) {
      alert("Data de emissão inválida!");
      return;
    }

    const cpfInstance = new CPF(cpf, dataEmissaoDate);

    const clienteData = {
      nome,
      nomeSocial,
      cpf: cpfInstance.getValor, // Ou pode passar cpfInstance diretamente, se seu backend aceitar o objeto CPF
      dataEmissao: dataEmissaoDate,
      id,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/clientes', clienteData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Cliente cadastrado com sucesso!');
        onCadastrar(nome, cpfInstance, nomeSocial, id);
      } else {
        alert('Cliente cadastrado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao tentar se comunicar com o servidor.');
    }
  };

  return (
    <div style={{ backgroundColor: tema === 'light' ? '#fff' : '#333', color: tema === 'light' ? '#000' : '#fff' }}>
      <h2>Cadastro Cliente</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF"
        />
        <input
          type="text"
          value={nomeSocial}
          onChange={(e) => setNomeSocial(e.target.value)}
          placeholder="Nome Social"
        />
        <input
          type="date"
          value={dataEmissao}
          onChange={(e) => setDataEmissao(e.target.value)}
          placeholder="Data de Emissão"
        />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          placeholder="ID"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormularioCadastroCliente;
