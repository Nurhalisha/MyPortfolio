import React from 'react';

const BattleHistory = ({ history, onClear }) => {
  return (
    <div className="battle-history">
      <h2>Battle History</h2>
      {history.length === 0 ? (
        <p>No battles yet.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <strong>{entry.timestamp}</strong> — {entry.myPokemon.name} vs {entry.opponentPokemon.name} — <em>{entry.result.winner}</em>
            </li>
          ))}
        </ul>
      )}
      {history.length > 0 && (
        <button onClick={onClear} className="clear-history-button">Clear History</button>
      )}
    </div>
  );
};

export default BattleHistory;
