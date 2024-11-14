import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>;

    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
    }

    public listar(): void {
        console.log(`\nLista de todos os pets:`);

        if (this.pets.length === 0) {
            console.log("Nenhum pet cadastrado.");
            return;
        }

        this.pets.forEach(pet => {
            console.log(`Nome: ${pet.getNome}`);
            console.log(`Raça: ${pet.getRaca}`);
            console.log(`Gênero: ${pet.getGenero}`);
            console.log(`Tipo: ${pet.getTipo}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
