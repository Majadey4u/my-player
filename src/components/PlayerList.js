import React from 'react';
import Player from './Player';
import PlayerList from './PlayerList';

const PlayersList = () => {
  return (
    <div>
      <h1 style={{ fontSize: '55px', fontFamily: 'cursive', fontWeight: '800', textAlign: 'left', color: 'green' }}>FIFA PLAYERS</h1>
      <ul style={{ listStyleType: 'square', color: 'darkblue', margin: '25px' }}>
        {PlayerList.map((player, index) => ( // Changed PlayerList to player
          <li key={index}>
            <Player
              name={player.name} 
              team={player.team} 
              nationality={player.nationality} 
              jerseyNumber={player.jerseyNumber} 
              imageUrl={player.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;
