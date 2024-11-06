import { Component } from "react";

type Props = {
    selectorView: (newView: string, event: Event) => void;
    tema: string;
    botoes: string[];
}

export default class BarraNavegacao extends Component<Props> {
    render() {
        const { tema, botoes } = this.props;

        return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: tema, marginBottom: 10 }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">PetLovers</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {botoes.map(botao => (
                                <li key={botao} className="nav-item">
                                    <a className="nav-link" href="#" onClick={(e) => this.props.selectorView(botao, e)}>{botao}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
