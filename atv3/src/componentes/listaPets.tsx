import { Component } from "react";
import Pet from "../modelo/pet";

interface Props {
  pets: Pet[];
  tema: string;
}

export default class ListaPets extends Component<Props> {
  render() {
    const { pets, tema } = this.props;

    return (
      <div className="container-fluid">
        <ul className="list-group">
          {pets.map((pet) => (
            <li
              key={pet.nome}
              className="list-group-item list-group-item-action"
            >
              Nome: {pet.getNome}, Raça: {pet.getRaca}, Tipo: {pet.getTipo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}