import React, { Component } from 'react';
import axios from 'axios';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
  clientes: Cliente[];
  pets: Pet[];
  produtos: Produto[];
  tema: string;
};

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clientes: [],
      pets: [],
      produtos: [],
      tema: 'light', // Tema padrão
    };

    axios.defaults.baseURL = 'http://localhost:3001';
  }

  // Função para alternar entre tema claro e escuro
  alterarTema = () => {
    this.setState((prevState) => ({
      tema: prevState.tema === 'light' ? 'dark' : 'light',
    }));
  };

  // Carregar os dados do backend ao montar o componente
  async componentDidMount() {
    try {
      const clientesResponse = await axios.get('/api/clientes');
      const petsResponse = await axios.get('/api/pets');
      const produtosResponse = await axios.get('/api/produtos');
      this.setState({
        clientes: clientesResponse.data,
        pets: petsResponse.data,
        produtos: produtosResponse.data,
      });
    } catch (error) {
      console.error("Erro ao carregar os dados", error);
    }
  }

  // Função para cadastrar um novo produto
  onCadastrarProduto = (nome: string, preco: number) => {
    const novoProduto: Produto = {
      nome,
      preco,
      consumoCount: 0,
    };
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, novoProduto],
    }));
  };

  // Função para cadastrar um novo cliente
  onCadastrarCliente = (nome: string, cpf: CPF, nomeSocial: string, id: number) => {
    // Cria o novo cliente com o ID gerado
    const novoCliente = new Cliente(nome, nomeSocial, cpf);
    novoCliente.id = id; // Atribui o ID
  
    // Recupera os clientes atuais do localStorage
    const clientesDoLocalStorage = localStorage.getItem('clientes');
    let clientes = clientesDoLocalStorage ? JSON.parse(clientesDoLocalStorage) : [];
  
    // Adiciona o novo cliente à lista
    clientes.push(novoCliente);
  
    // Atualiza o localStorage com a nova lista de clientes
    localStorage.setItem('clientes', JSON.stringify(clientes));
  
    // Atualiza o estado do componente com os novos clientes
    this.setState({ clientes });
  };

  // Função para deletar um cliente
  onDeletarCliente = (id: number) => {
    // Recupera a lista de clientes do localStorage
    const clientesSalvos = JSON.parse(localStorage.getItem('clientes') || '[]');
  
    // Filtra os clientes para remover o cliente com o id especificado
    const clientesAtualizados = clientesSalvos.filter((cliente: Cliente) => cliente.id !== id);
  
    // Salva novamente a lista no localStorage
    localStorage.setItem('clientes', JSON.stringify(clientesAtualizados));
  
    // Atualiza o estado do componente
    this.setState({ clientes: clientesAtualizados });
  };

  // Função para cadastrar um novo pet
  onCadastrarPet = (nome: string, especie: string, raca: string, genero: string) => {
    const novoPet = new Pet(nome, especie, raca, genero);
    this.setState((prevState) => ({
      pets: [...prevState.pets, novoPet],
    }));
  };

  render() {
    const { tema, clientes, pets, produtos } = this.state;

    return (
      <div style={{ backgroundColor: tema === 'light' ? '#fff' : '#333', color: tema === 'light' ? '#000' : '#fff' }}>
        <Router>
          <Navbar bg={tema} expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">PetShop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/clientes">Clientes</Nav.Link>
                  <Nav.Link href="/pets">Pets</Nav.Link>
                  <Nav.Link href="/produtos">Produtos</Nav.Link>
                  <Nav.Link href="/cadastroCliente">Cadastro Cliente</Nav.Link>
                  <Nav.Link href="/cadastroPet">Cadastro Pet</Nav.Link>
                  <Nav.Link href="/cadastroProduto">Cadastro Produto</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link onClick={this.alterarTema}>Alterar Tema</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div style={{ paddingTop: '60px' }}>
            <Routes>
              <Route
                path="/clientes"
                element={
                  <ListaCliente
                    clientes={clientes}
                    tema={tema}
                    onDeletar={this.onDeletarCliente}
                    onAtualizar={function (id: number): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                }
              />
              <Route path="/pets" element={<ListaPets pets={pets} tema={tema} />} />
              <Route path="/produtos" element={<ListaProdutos produtos={produtos} tema={tema} />} />
              <Route
                path="/cadastroProduto"
                element={<FormularioCadastroProduto tema={tema} onCadastrar={this.onCadastrarProduto} />}
              />
              <Route
                path="/cadastroPet"
                element={<FormularioCadastroPet tema={tema} onCadastrar={this.onCadastrarPet} />}
              />
              <Route
                path="/cadastroCliente"
                element={<FormularioCadastroCliente tema={tema} onCadastrar={this.onCadastrarCliente} />}
              />
              <Route
                path="/"
                element={<div><h2>Bem-vindo ao PetShop</h2><p>Escolha uma opção no menu acima.</p></div>}
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
