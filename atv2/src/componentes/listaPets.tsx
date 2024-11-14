import { Component } from "react";
import Pet from "../modelo/pet";

type Props = {
    pets: Pet[];
    tema: string;
}

export default class ListaPets extends Component<Props> {
    render() {
        const { pets, tema } = this.props;

        return (
            <div className="container-fluid">
                <div className="list-group">
                    {pets.map(pet => (
                        <a href="#" className="list-group-item list-group-item-action" key={pet.nome}>
                            Nome: {pet.getNome}, Raça: {pet.getRaca}, Tipo: {pet.getTipo}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
