import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon, onAddToTeam }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>HP: {pokemon.stats.hp}</p>
      <p>Attack: {pokemon.stats.attack}</p>
      <p>Defense: {pokemon.stats.defense}</p>
      <p>Speed: {pokemon.stats.speed}</p>
      <button onClick={() => onAddToTeam(pokemon)}>Add to Team</button>
    </div>
  );
};

export default PokemonCard;
