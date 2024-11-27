import React, { useState } from 'react';
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

const App: React.FC = () => {
  // Estados para gerenciar tela ativa e listas de dados
  const [tela, setTela] = useState<string>('Nenhuma');
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Função para alternar entre telas
  const navegarPara = (novaTela: string) => setTela(novaTela);

  // Função para cadastrar novo cliente
  const cadastrarCliente = (nome: string, cpfValor: string, nomeSocial: string) => {
    const cpf = new CPF(cpfValor, new Date());
    const novoCliente = new Cliente(nome, nomeSocial, cpf);
    setClientes(prevClientes => [...prevClientes, novoCliente]);
    alert(`Cliente ${nome} cadastrado com sucesso!`);
  };

  // Função para cadastrar novo pet
  const cadastrarPet = (nome: string, raca: string, genero: string, tipo: string) => {
    const novoPet = new Pet(nome, raca, genero, tipo);
    setPets(prevPets => [...prevPets, novoPet]);
    alert(`Pet ${nome} cadastrado com sucesso!`);
  };

  // Função para cadastrar novo produto
  const cadastrarProduto = (nome: string, preco: number) => {
    const novoProduto = new Produto(nome, preco);
    setProdutos(prevProdutos => [...prevProdutos, novoProduto]);
    alert(`Produto ${nome} cadastrado com sucesso!`);
  };

  // Definir o componente correto a ser renderizado com base na tela atual
  let conteudo;
  switch (tela) {
    case 'CadastroClientes':
      conteudo = <FormularioCadastroCliente tema="#e3f2fd" onCadastrar={cadastrarCliente} />;
      break;
    case 'CadastroPets':
      conteudo = <FormularioCadastroPet tema="#e3f2fd" onCadastrar={cadastrarPet} />;
      break;
    case 'CadastroProdutos':
      conteudo = <FormularioCadastroProduto tema="#e3f2fd" onCadastrar={cadastrarProduto} />;
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

  // Retornar o layout completo do componente
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Sistema C4P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={() => navegarPara('CadastroClientes')}>Cadastro Clientes</Nav.Link>
            <Nav.Link href="#" onClick={() => navegarPara('CadastroPets')}>Cadastro Pets</Nav.Link>
            <Nav.Link href="#" onClick={() => navegarPara('CadastroProdutos')}>Cadastro Produtos</Nav.Link>
            <Nav.Link href="#" onClick={() => navegarPara('ListaClientes')}>Listar Clientes</Nav.Link>
            <Nav.Link href="#" onClick={() => navegarPara('ListaPets')}>Listar Pets</Nav.Link>
            <Nav.Link href="#" onClick={() => navegarPara('ListaProdutos')}>Listar Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-3">
        {conteudo}
      </Container>
    </>
  );
};

export default App;
