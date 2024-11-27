import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import Produto from "../modelo/produto";
import Pet from "../modelo/pet";
import Cliente from "../modelo/cliente";

type State = {
  tela: string;
  clientes: Cliente[];
  pets: Pet[];
  produtos: Produto[];
};

export default class Roteador extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tela: 'Clientes',
      clientes: [],
      pets: [],
      produtos: [],
    };
    this.selecionarView = this.selecionarView.bind(this);
    this.cadastrarProduto = this.cadastrarProduto.bind(this);
    this.cadastrarPet = this.cadastrarPet.bind(this);
  }

  selecionarView(novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) {
    evento.preventDefault();
    this.setState({ tela: novaTela });
  }

  cadastrarProduto(nome: string, preco: number) {
    const novoProduto = new Produto(nome, preco);
    this.setState((prevState) => ({
      ...prevState,
      produtos: [...prevState.produtos, novoProduto]
    }));
    console.log(`Produto ${nome} cadastrado com sucesso!`);
  }

  cadastrarPet(nome: string, raca: string, genero: string, tipo: string) {
    const novoPet = new Pet(nome, raca, genero, tipo);
    this.setState((prevState) => ({
      ...prevState,
      pets: [...prevState.pets, novoPet]
    }));
    console.log(`Pet ${nome} cadastrado com sucesso!`);
  }

  render() {
    const { tela, clientes, pets, produtos } = this.state;
    const barraNavegacao = (
      <BarraNavegacao
        onClickBotao={this.selecionarView}
        tema="#e3f2fd"
        botoes={['Clientes', 'CadastrosClientes', 'Pets', 'CadastrosPets', 'Produtos', 'CadastrosProdutos']}
      />
    );

    return (
      <>
        {barraNavegacao}
        {tela === 'Clientes' && <ListaCliente clientes={clientes} tema="#e3f2fd" />}
        {tela === 'CadastrosClientes' && <FormularioCadastroCliente tema="#e3f2fd" onCadastrar={function (nome: string, cpf: string, nomeSocial: string): void {
                throw new Error("Function not implemented.");
            } } />}
        {tela === 'Pets' && <ListaPets pets={pets} tema="#e3f2fd" />}
        {tela === 'CadastrosPets' && <FormularioCadastroPet tema="#e3f2fd" onCadastrar={this.cadastrarPet} />}
        {tela === 'Produtos' && <ListaProdutos produtos={produtos} tema="#e3f2fd" />}
        {tela === 'CadastrosProdutos' && <FormularioCadastroProduto tema="#e3f2fd" onCadastrar={this.cadastrarProduto} />}
      </>
    );
  }
}
