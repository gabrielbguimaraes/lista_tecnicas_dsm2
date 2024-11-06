import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./FormularioCadastroProduto";
import Produto from "../../../../atv1/src/modelo/produto";
import Cliente from "../../../../atv1/src/modelo/cliente";
import Pet from "../../../../atv1/src/modelo/pet";

type State = {
    tela: string;
    clientes: Cliente[];
    pets: Pet[];
    produtos: Produto[];
}

export default class Roteador extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tela: 'Clientes',
            clientes: [], 
            pets: [], 
            produtos: [], 
        }
        this.selecionarView = this.selecionarView.bind(this);
        this.cadastrarProduto = this.cadastrarProduto.bind(this);
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault();
        this.setState({ tela: novaTela });
    }

    cadastrarProduto(nome: string, preco: number) {
        const novoProduto = new Produto(nome, preco); // Cria uma nova instância de Produto

        // Adiciona o novo produto ao estado
        this.setState((prevState) => ({
            produtos: [...prevState.produtos, novoProduto] // Atualiza o estado, adicionando o novo produto
        }));

        console.log(`Produto ${nome} cadastrado com sucesso!`);
    }

    render() {
        // Renderiza componentes com base na tela selecionada
        const { tela, clientes, pets, produtos } = this.state;
        const barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos']} />

        return (
            <>
                {barraNavegacao}
                {tela === 'Clientes' && <ListaCliente clientes={clientes} tema="#e3f2fd" />}
                {tela === 'CadastrosClientes' && <FormularioCadastroCliente tema="#e3f2fd" />}
                {tela === 'Pets' && <ListaPets pets={pets} tema="#e3f2fd" />}
                {tela === 'CadastrosPets' && <FormularioCadastroPet tema="#e3f2fd" onCadastrar={this.cadastrarPet} />} {/* Função para cadastrar pet */}
                {tela === 'Produtos' && <ListaProdutos produtos={produtos} tema="#e3f2fd" />}
                {tela === 'CadastrosProdutos' && <FormularioCadastroProduto tema="#e3f2fd" onCadastrar={this.cadastrarProduto} />} {/* Passando função para cadastrar produto */}
            </>
        );
    }
}
