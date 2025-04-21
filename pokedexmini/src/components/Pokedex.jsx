import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import './Pokedex.css';

const Pokedex = ({ onAddToTeam }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonArray = [];
      for (let i = 1; i <= 24; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonArray.push({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          stats: {
            hp: data.stats.find(s => s.stat.name === 'hp').base_stat,
            attack: data.stats.find(s => s.stat.name === 'attack').base_stat,
            defense: data.stats.find(s => s.stat.name === 'defense').base_stat,
            speed: data.stats.find(s => s.stat.name === 'speed').base_stat,
          },
        });
      }
      setPokemonList(pokemonArray);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="pokedex-container">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAddToTeam={onAddToTeam} />
      ))}
    </div>
  );
};

export default Pokedex;
