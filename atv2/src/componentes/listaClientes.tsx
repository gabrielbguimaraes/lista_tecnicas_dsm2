import { Component } from "react";
import Cliente from "../modelo/cliente";

type Props = {
    clientes: Cliente[];
    tema: string;
}

export default class ListaCliente extends Component<Props> {
    render() {
        const { clientes, tema } = this.props;

        return (
            <div className="container-fluid">
                <div className="list-group">
                    {clientes.map(cliente => (
                        <a href="#" className="list-group-item list-group-item-action" key={cliente.getCpf.getValor}>
                            Nome: {cliente.nome}, CPF: {cliente.getCpf.getValor}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
