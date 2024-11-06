import { Component } from "react";

type Props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<Props> {
    render() {
        let tema = this.props.tema;

        return (
            <div className="container-fluid">
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome social" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" />
                    </div>
                    <button className="btn btn-primary" type="button" style={{ background: tema }}>Cadastrar</button>
                </form>
            </div>
        );
    }
}
