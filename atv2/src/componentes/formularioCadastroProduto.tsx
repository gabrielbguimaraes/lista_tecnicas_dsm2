import { Component } from "react";

type Props = {
    tema: string;
    onCadastrar: (nome: string, preco: number) => void; // Função a ser chamada ao cadastrar um produto
}

type State = {
    nome: string;
    preco: number;
}

export default class FormularioCadastroProduto extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: '',
            preco: 0
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    }

    handleSubmit = () => {
        const { nome, preco } = this.state;
        this.props.onCadastrar(nome, parseFloat(preco.toString())); // Chama a função de cadastro passada como prop
    }

    render() {
        let tema = this.props.tema;

        return (
            <div className="container-fluid">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome do Produto</label>
                        <input 
                            type="text" 
                            name="nome" 
                            className="form-control" 
                            placeholder="Nome do produto" 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Preço do Produto</label>
                        <input 
                            type="number" 
                            name="preco" 
                            className="form-control" 
                            placeholder="Preço do produto" 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Cadastrar Produto</button>
                </form>
            </div>
        );
    }
}
