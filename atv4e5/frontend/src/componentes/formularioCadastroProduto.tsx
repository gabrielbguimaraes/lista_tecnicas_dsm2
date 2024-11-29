import React, { Component } from 'react';
import axios from 'axios';

type Props = {
  tema: string;
  onCadastrar: (nome: string, preco: number) => void;
};

type State = {
  nome: string;
  preco: number;
};

export default class FormularioCadastroProduto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      preco: 0,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    this.setState((prevState) => {
      const updatedValue = name === 'preco'
        ? (parseFloat(value) || 0)
        : value;
  
      return {
        ...prevState,
        [name]: updatedValue,
      };
    });
  };

  submitForm = async () => {
    const { nome, preco } = this.state;
  
    if (preco !== 0) {
      try {
        const response = await axios.post('http://localhost:3001/api/produtos', { nome, preco });
        console.log('Produto cadastrado:', response.data);
        this.props.onCadastrar(nome, preco);
        this.setState({ nome: '', preco: 0 });
      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
      }
    } else {
      console.warn('Please enter a valid price.');
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.tema, padding: '20px', borderRadius: '5px' }}>
        <h2>Cadastrar Produto</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          value={this.state.nome}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={this.state.preco}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <button onClick={this.submitForm}>Cadastrar Produto</button>
      </div>
    );
  }
}
