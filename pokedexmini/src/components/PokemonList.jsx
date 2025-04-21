import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, onAddToTeam }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAddToTeam={onAddToTeam} />
      ))}
    </div>
  );
};

export default PokemonList;
