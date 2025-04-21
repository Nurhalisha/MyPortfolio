import React, { useState } from 'react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Team from './components/Team';
import Battle from './components/Battle';
import './index.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [opponent, setOpponent] = useState(null);
  const [battleResult, setBattleResult] = useState(null);
  const [battleStarted, setBattleStarted] = useState(false);

  const addToTeam = (pokemon) => {
    if (team.length >= 6) {
      alert("You can only have 6 Pokémon on your team!");
      return;
    }
    if (team.find(p => p.id === pokemon.id)) {
      alert("This Pokémon is already on your team!");
      return;
    }
    setTeam([...team, pokemon]);
  };

  const startBattle = () => {
    if (team.length === 0) {
      alert("Add at least 1 Pokémon to your team before starting a battle!");
      return;
    }

    const playerPokemon = team[Math.floor(Math.random() * team.length)];
    const randomIndex = Math.floor(Math.random() * 151) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch Pokémon data');
        }
        return res.json();
      })
      .then((data) => {
        const opponentPokemon = {
          name: data.name,
          image: data.sprites.front_default,
          stats: {
            hp: data.stats.find((s) => s.stat.name === 'hp').base_stat,
            attack: data.stats.find((s) => s.stat.name === 'attack').base_stat,
            defense: data.stats.find((s) => s.stat.name === 'defense').base_stat,
            speed: data.stats.find((s) => s.stat.name === 'speed').base_stat,
          },
        };

        setOpponent(opponentPokemon);
        setBattleResult(compareStats(playerPokemon, opponentPokemon));
        setBattleStarted(true);
      })
      .catch((error) => {
        console.error('Error fetching opponent data:', error);
        alert("There was an issue fetching opponent Pokémon data. Please try again.");
      });
  };

  const compareStats = (player, opponent) => {
    const result = {};
    let playerWins = 0;
    let opponentWins = 0;

    ['hp', 'attack', 'defense', 'speed'].forEach((stat) => {
      if (player.stats[stat] > opponent.stats[stat]) {
        result[stat] = player.name;
        playerWins++;
      } else {
        result[stat] = opponent.name;
        opponentWins++;
      }
    });

    result.winner = playerWins > opponentWins ? `${player.name} Wins!` : `${opponent.name} Wins!`;

    result.statsComparison = {
      hp: {
        player: player.stats.hp,
        opponent: opponent.stats.hp,
        winner: result.hp
      },
      attack: {
        player: player.stats.attack,
        opponent: opponent.stats.attack,
        winner: result.attack
      },
      defense: {
        player: player.stats.defense,
        opponent: opponent.stats.defense,
        winner: result.defense
      },
      speed: {
        player: player.stats.speed,
        opponent: opponent.stats.speed,
        winner: result.speed
      }
    };

    return result;
  };

  const handleStartNewBattle = () => {
    setOpponent(null);
    setBattleResult(null);
    setBattleStarted(false);
    setTeam([]); // ✅ Clears team for new round
  };

  return (
    <div className="app-container">
      <Header />

      {/* My Team Section */}
      <h2>My Team ({team.length}/6)</h2>
      <Team team={team} />

      {/* Start Battle Button - below the team */}
      {!battleStarted && (
        <button className="start-battle-button" onClick={startBattle}>
          Start Battle
        </button>
      )}

      {/* Show Battle Result */}
      {battleStarted && opponent && battleResult && (
        <Battle
          playerPokemon={team[Math.floor(Math.random() * team.length)]}
          opponentPokemon={opponent}
          battleResult={battleResult}
          onStartNewBattle={handleStartNewBattle}
        />
      )}

      {/* Pokédex Section */}
      <Pokedex onAddToTeam={addToTeam} />
    </div>
  );
};

export default App;
