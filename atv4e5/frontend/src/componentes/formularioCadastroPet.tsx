import React, { Component } from 'react';
import axios from 'axios';
import Pet from '../modelo/pet';

type Props = {
  tema: string;
  onCadastrar: (nome: string, especie: string, raca: string, genero: string) => void;
};

type State = {
  nome: string;
  especie: string;
  raca: string;
  genero: string;
};

export default class FormularioCadastroPet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      especie: '',
      raca: '',
      genero: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  submitForm = async () => {
    const { nome, especie, raca, genero } = this.state;

    try {
      const response = await axios.post('http://localhost:3001/api/pets', { nome, especie, raca, genero });
      console.log('Pet cadastrado:', response.data);

      // Passando os parâmetros corretamente
      this.props.onCadastrar(nome, especie, raca, genero);

      this.setState({ nome: '', especie: '', raca: '', genero: '' });
    } catch (error) {
      console.error('Erro ao cadastrar pet:', error);
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: this.props.tema, padding: '20px', borderRadius: '5px' }}>
        <h2>Cadastrar Pet</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Pet"
          value={this.state.nome}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <input
          type="text"
          name="especie"
          placeholder="Espécie"
          value={this.state.especie}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <input
          type="text"
          name="raca"
          placeholder="Raça"
          value={this.state.raca}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <input
          type="text"
          name="genero"
          placeholder="Gênero"
          value={this.state.genero}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <button onClick={this.submitForm}>Cadastrar Pet</button>
      </div>
    );
  }
}
