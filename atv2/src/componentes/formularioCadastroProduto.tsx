import React, { Component } from 'react';

type Props = {
  tema: string;
  onCadastrar: (nome: string, preco: number) => void;
};

type State = {
  nome: string;
  preco: number | '';
};

export default class FormularioCadastroProduto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      preco: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'preco' ? parseFloat(value) || '' : value } as Pick<State, keyof State>);
  }

  submitForm = () => {
    const { nome, preco } = this.state;
    if (preco !== '') {
      this.props.onCadastrar(nome, preco);
      this.setState({ nome: '', preco: '' });
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
