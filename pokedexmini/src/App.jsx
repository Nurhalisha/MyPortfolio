import React, { useState } from 'react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Team from './components/Team';
import Battle from './components/Battle';
import BattleHistory from './components/BattleHistory';
import './index.css';

const App = () => {
  const [myTeam, setMyTeam] = useState([]);
  const [opponentsTeam, setOpponentsTeam] = useState([]);
  const [activeTeam, setActiveTeam] = useState('my');
  const [battleResult, setBattleResult] = useState(null);
  const [battleStarted, setBattleStarted] = useState(false);
  const [battleHistory, setBattleHistory] = useState([]);

  const addToTeam = (pokemon) => {
    const currentTeam = activeTeam === 'my' ? myTeam : opponentsTeam;
    const setTeam = activeTeam === 'my' ? setMyTeam : setOpponentsTeam;

    if (currentTeam.length >= 6) {
      alert("You can only have 6 Pokémon per team!");
      return;
    }

    if (currentTeam.find(p => p.id === pokemon.id)) {
      alert("This Pokémon is already in the team!");
      return;
    }

    setTeam([...currentTeam, pokemon]);
  };

  const startBattle = () => {
    if (myTeam.length === 0 || opponentsTeam.length === 0) {
      alert("Both teams need at least one Pokémon to battle!");
      return;
    }

    const myPokemon = myTeam[Math.floor(Math.random() * myTeam.length)];
    const opponentPokemon = opponentsTeam[Math.floor(Math.random() * opponentsTeam.length)];
    const result = compareStats(myPokemon, opponentPokemon);

    const battleData = {
      myPokemon,
      opponentPokemon,
      result,
      timestamp: new Date().toLocaleString(),
    };

    setBattleResult({ ...result, myPokemon, opponentPokemon });
    setBattleHistory([battleData, ...battleHistory]);
    setBattleStarted(true);
  };

  const compareStats = (player, opponent) => {
    let playerWins = 0;
    let opponentWins = 0;
    const statKeys = ['hp', 'attack', 'defense', 'speed'];

    const result = statKeys.reduce((acc, stat) => {
      if (player.stats[stat] > opponent.stats[stat]) {
        acc[stat] = player.name;
        playerWins++;
      } else {
        acc[stat] = opponent.name;
        opponentWins++;
      }
      return acc;
    }, {});

    result.winner = playerWins > opponentWins ? `${player.name} Wins!` : `${opponent.name} Wins!`;

    return result;
  };

  const handleStartNewBattle = () => {
    setBattleResult(null);
    setBattleStarted(false);
    setMyTeam([]);
    setOpponentsTeam([]);
  };

  const switchTeam = () => {
    setActiveTeam(activeTeam === 'my' ? 'opponent' : 'my');
  };

  const handleClearHistory = () => {
    setBattleHistory([]);
  };

  return (
    <div className="app-container">
      <Header />
      <h2>My Team ({myTeam.length}/6)</h2>
      <Team team={myTeam} />
      <h2>Opponent's Team ({opponentsTeam.length}/6)</h2>
      <Team team={opponentsTeam} />

      {!battleStarted && (
        <>
          <button onClick={switchTeam}>
            Add to {activeTeam === 'my' ? "Opponent's Team" : "My Team"}
          </button>
          <button className="start-battle-button" onClick={startBattle}>
            Start Battle
          </button>
        </>
      )}

      {battleStarted && battleResult && (
        <Battle
          playerPokemon={battleResult.myPokemon}
          opponentPokemon={battleResult.opponentPokemon}
          battleResult={battleResult}
          onStartNewBattle={handleStartNewBattle}
        />
      )}

      <BattleHistory history={battleHistory} onClear={handleClearHistory} />
      <Pokedex onAddToTeam={addToTeam} />
    </div>
  );
};

export default App;
