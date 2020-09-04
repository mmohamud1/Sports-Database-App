import React from 'react';
import PlayerSearch from '../components/PlayerSearch';
import Spinner from '../components/Spinner';
import PlayerItem from '../components/PlayerItem';

const Players = ({ getPlayers, players, loading, clearSearch }) => {
    if (loading) {
        return (
            <div className="team-bg">
                <PlayerSearch getPlayers={getPlayers} />
                <Spinner />        
            </div>
        )
    } else if (players === null) {
        return (
            <div className="team-bg">
                <PlayerSearch getPlayers={getPlayers} />
                <button className="clear-btn"  onClick={clearSearch}>
                    <i className="fa fa-times"></i> Clear Search
                </button>
                <h1 className="error-msg">no results</h1>      
            </div> 
        )
    } else {
        return (
            <div className="team-bg">
               <PlayerSearch getPlayers={getPlayers} />
               {players.length > 0 && (
                    <button className="clear-btn"  onClick={clearSearch}>
                        <i className="fa fa-times"></i> Clear Search
                    </button>
                )}
               <div className="grid-3 teams-container">
                   {players.map(player => (
                       <PlayerItem key={player.idPlayer} player={player}/>
                   ))}
               </div>
            </div>
        )
    }
}

export default Players
