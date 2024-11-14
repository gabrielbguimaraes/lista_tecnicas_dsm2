import React, { Component } from 'react';

type Props = {
  tema: string;
  onCadastrar: (nome: string, raca: string, genero: string, tipo: string) => void;
};

type State = {
  nome: string;
  raca: string;
  genero: string;
  tipo: string;
};

export default class FormularioCadastroPet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      raca: '',
      genero: '',
      tipo: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  }

  submitForm = () => {
    const { nome, raca, genero, tipo } = this.state;
    this.props.onCadastrar(nome, raca, genero, tipo);
    this.setState({ nome: '', raca: '', genero: '', tipo: '' });
  }

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
        <input
          type="text"
          name="tipo"
          placeholder="Tipo"
          value={this.state.tipo}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <button onClick={this.submitForm}>Cadastrar Pet</button>
      </div>
    );
  }
}
