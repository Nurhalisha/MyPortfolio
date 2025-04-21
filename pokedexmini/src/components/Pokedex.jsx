import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import './Pokedex.css';

const Pokedex = ({ onAddToTeam }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const selectedIds = [
        1, 4, 7, 10, 12, 16, 19, 25, 27, 35, 37, 39,
        41, 43, 52, 54, 58, 60, 63, 66, 69, 74, 77, 79
      ]; // Includes Pikachu (25)
      
      try {
        const pokemonArray = await Promise.all(
          selectedIds.map(async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            return {
              id: data.id,
              name: data.name,
              image: data.sprites.front_default,
              stats: {
                hp: data.stats.find((s) => s.stat.name === 'hp').base_stat,
                attack: data.stats.find((s) => s.stat.name === 'attack').base_stat,
                defense: data.stats.find((s) => s.stat.name === 'defense').base_stat,
                speed: data.stats.find((s) => s.stat.name === 'speed').base_stat,
              },
            };
          })
        );
        setPokemonList(pokemonArray);
      } catch (error) {
        console.error('Failed to fetch Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="pokedex-container">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAddToTeam={onAddToTeam} />
      ))}
    </div>
  );
};

export default Pokedex;
