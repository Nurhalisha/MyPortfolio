import React from 'react';

const Battle = ({ playerPokemon, opponentPokemon, battleResult, onStartNewBattle }) => {
  return (
    <div className="battle-container">
      <h2 className="battle-header">Battle</h2>

      <div className="battle-stats">
        <h3>Stats Comparison:</h3>
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
            {Object.keys(battleResult.statsComparison).map(stat => (
              <tr key={stat}>
                <td>{stat.charAt(0).toUpperCase() + stat.slice(1)}</td>
                <td>{battleResult.statsComparison[stat].player}</td>
                <td>{battleResult.statsComparison[stat].opponent}</td>
                <td>{battleResult.statsComparison[stat].winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="battle-result">
        <h3>{battleResult.winner}</h3>
      </div>

      <button onClick={onStartNewBattle}>Start New Battle</button>
    </div>
  );
};

export default Battle;
