import React, { Component } from 'react';

type Props = {
  tema: string;
  onCadastrar: (nome: string, cpf: string, nomeSocial: string) => void;
};

type State = {
  nome: string;
  cpf: string;
  nomeSocial: string;
};

export default class FormularioCadastroCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      cpf: '',
      nomeSocial: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<State, keyof State>);
  }

  submitForm = () => {
    const { nome, cpf, nomeSocial } = this.state;
    this.props.onCadastrar(nome, cpf, nomeSocial);
    this.setState({ nome: '', cpf: '', nomeSocial: '' });
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.tema, padding: '20px', borderRadius: '5px' }}>
        <h2>Cadastrar Cliente</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={this.state.cpf}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <input
          type="text"
          name="nomeSocial"
          placeholder="Nome Social"
          value={this.state.nomeSocial}
          onChange={this.handleChange}
          style={{ margin: '5px' }}
        />
        <button onClick={this.submitForm}>Cadastrar Cliente</button>
      </div>
    );
  }
}
