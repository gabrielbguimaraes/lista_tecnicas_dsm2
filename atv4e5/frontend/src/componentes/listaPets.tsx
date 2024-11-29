import React from 'react';
import Pet from '../modelo/pet';

type Props = {
  pets: Pet[];
  tema: string;
};

const ListaPets: React.FC<Props> = ({ pets, tema }) => {
  return (
    <div style={{ backgroundColor: tema === 'light' ? '#fff' : '#333', color: tema === 'light' ? '#000' : '#fff' }}>
      <h2>Lista de Pets</h2>
      <div>
        {pets.map((pet, index) => (
          <div key={index}>
            <p><strong>{pet.nome}</strong></p>
            <p>Espécie: {pet.tipo}</p>
            <p>Raça: {pet.raca}</p>
            <p>Gênero: {pet.genero}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaPets;
