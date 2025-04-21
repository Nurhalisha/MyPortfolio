import React from 'react';

const Battle = ({ playerPokemon, opponentPokemon, battleResult, onStartNewBattle }) => {
  return (
    <div className="battle-container">
      <h2 className="battle-header">Battle Time!</h2>
      <div className="battle-stats">
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              <th>{playerPokemon.name}</th>
              <th>{opponentPokemon.name}</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {['hp', 'attack', 'defense', 'speed'].map(stat => (
              <tr key={stat}>
                <td>{stat.toUpperCase()}</td>
                <td>{playerPokemon.stats[stat]}</td>
                <td>{opponentPokemon.stats[stat]}</td>
                <td>{battleResult[stat]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="battle-result">{battleResult.winner}</div>
      <button className="start-battle-button" onClick={onStartNewBattle}>
        Start New Battle
      </button>
    </div>
  );
};

export default Battle;
