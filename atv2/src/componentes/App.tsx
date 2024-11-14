import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import FormularioCadastroCliente from './formularioCadastroCliente';
import FormularioCadastroPet from './formularioCadastroPet';
import FormularioCadastroProduto from './formularioCadastroProduto';
import ListaCliente from './listaClientes';
import ListaPets from './listaPets';
import ListaProdutos from './listaProdutos';
import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import Produto from '../modelo/produto';
import CPF from '../modelo/cpf';


type State = {
  tela: string;
  clientes: Cliente[];
  pets: Pet[];
  produtos: Produto[];
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tela: 'Nenhuma',
      clientes: [],
      pets: [],
      produtos: [],
    };
  }

  navegarPara = (tela: string) => {
    this.setState({ tela });
  }

  cadastrarCliente = (nome: string, cpfValor: string, nomeSocial: string) => {
    const cpf = new CPF(cpfValor, new Date()); 

    const novoCliente = new Cliente(nome, nomeSocial, cpf);

    this.setState((prevState) => ({
      clientes: [...prevState.clientes, novoCliente]
    }));
  

    alert(`Cliente ${nome} cadastrado com sucesso!`);
  };

  cadastrarPet = (nome: string, raca: string, genero: string, tipo: string) => {
    const novoPet = new Pet(nome, raca, genero, tipo);
    this.setState((prevState) => ({
      pets: [...prevState.pets, novoPet]
    }));
    alert(`Pet ${nome} cadastrado com sucesso!`);
  };

  cadastrarProduto = (nome: string, preco: number) => {
    const novoProduto = new Produto(nome, preco);
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, novoProduto]
    }));
    alert(`Produto ${nome} cadastrado com sucesso!`);
  };

  render() {
    const { tela, clientes, pets, produtos } = this.state;
    let conteudo;

    switch (tela) {
      case 'CadastroClientes':
        conteudo = <FormularioCadastroCliente tema="#e3f2fd" onCadastrar={this.cadastrarCliente} />;
        break;
      case 'CadastroPets':
        conteudo = <FormularioCadastroPet tema="#e3f2fd" onCadastrar={this.cadastrarPet} />;
        break;
      case 'CadastroProdutos':
        conteudo = <FormularioCadastroProduto tema="#e3f2fd" onCadastrar={this.cadastrarProduto} />;
        break;
        case 'ListaClientes':
            conteudo = <ListaCliente clientes={clientes} tema="#e3f2fd" />;
            break;
          case 'ListaPets':
            conteudo = <ListaPets pets={pets} tema="#e3f2fd" />;
            break;
          case 'ListaProdutos':
            conteudo = <ListaProdutos produtos={produtos} tema="#e3f2fd" />;
            break;
      default:
        conteudo = <div>Selecione uma opção no menu para começar</div>;
    }

    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Sistema C4P</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" onClick={() => this.navegarPara('CadastroClientes')}>Cadastro Clientes</Nav.Link>
              <Nav.Link href="#" onClick={() => this.navegarPara('CadastroPets')}>Cadastro Pets</Nav.Link>
              <Nav.Link href="#" onClick={() => this.navegarPara('CadastroProdutos')}>Cadastro Produtos</Nav.Link>
              <Nav.Link href="#" onClick={() => this.navegarPara('ListaClientes')}>Listar Clientes</Nav.Link>
              <Nav.Link href="#" onClick={() => this.navegarPara('ListaPets')}>Listar Pets</Nav.Link>
              <Nav.Link href="#" onClick={() => this.navegarPara('ListaProdutos')}>Listar Produtos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="mt-3">
          {conteudo}
        </Container>
      </>
    );
  }
}
