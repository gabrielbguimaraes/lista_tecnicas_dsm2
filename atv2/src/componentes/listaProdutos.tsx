import { Component } from "react";
import Produto from "../modelo/produto";

type Props = {
    produtos: Produto[];
    tema: string;
}

export default class ListaProdutos extends Component<Props> {
    render() {
        const { produtos, tema } = this.props;

        return (
            <div className="container-fluid">
                <div className="list-group">
                    {produtos.map(produto => (
                        <a href="#" className="list-group-item list-group-item-action" key={produto.nome}>
                            Nome: {produto.nome}, Preço: R$ {produto.preco.toFixed(2)}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
