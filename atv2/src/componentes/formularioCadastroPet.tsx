import { Component } from "react";

type Props = {
    tema: string;
    onCadastrar: (nome: string, raca: string, genero: string, tipo: string) => void; // Função para o cadastro
}

type State = {
    nome: string;
    raca: string;
    genero: string;
    tipo: string;
}

export default class FormularioCadastroPet extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: '',
            raca: '',
            genero: '',
            tipo: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    }

    handleSubmit = () => {
        const { nome, raca, genero, tipo } = this.state;
        this.props.onCadastrar(nome, raca, genero, tipo); // Chama a função de cadastro
    }

    render() {
        const tema = this.props.tema;

        return (
            <div className="container-fluid">
                <form>
                    <div className="mb-3">
                        <input type="text" name="nome" className="form-control" placeholder="Nome do Pet" onChange={this.handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="raca" className="form-control" placeholder="Raça do Pet" onChange={this.handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="genero" className="form-control" placeholder="Gênero do Pet" onChange={this.handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="tipo" className="form-control" placeholder="Tipo do Pet" onChange={this.handleInputChange} />
                    </div>
                    <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Cadastrar Pet</button>
                </form>
            </div>
        );
    }
}
