import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

type Props = {
    onClickBotao: (novaTela: string, evento: React.MouseEvent<any>) => void;
    tema: string;
    botoes: string[];
};

export default class BarraNavegacao extends Component<Props> {
  render() {
    const { tema, botoes, onClickBotao } = this.props;

    return (
      <Navbar bg={tema} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">PetShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {botoes.map(botao => (
                <Nav.Link key={botao} href="#" onClick={(e) => onClickBotao(botao, e)}>
                  {botao}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
