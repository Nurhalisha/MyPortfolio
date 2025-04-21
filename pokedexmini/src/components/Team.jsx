import React from 'react';
import './Team.css';

const Team = ({ team }) => {
  return (
    <div className="team-container">
      {team.map((pokemon) => (
        <div key={pokemon.id} className="team-card">
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <p>HP: {pokemon.stats.hp}</p>
          <p>ATK: {pokemon.stats.attack}</p>
          <p>DEF: {pokemon.stats.defense}</p>
          <p>SPD: {pokemon.stats.speed}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
