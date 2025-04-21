import React from 'react';
const AddToTeam = ({ onAddToTeam, pokemon }) => {
  return (
    <button onClick={() => onAddToTeam(pokemon)}>
      Add to Team
    </button>
  );
};

export default AddToTeam;
