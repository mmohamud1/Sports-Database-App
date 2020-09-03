import React from 'react'

const PlayerItem = ({ player }) => {
    return (
        <div>
            <div className="card-2">
                <div className="card-2-top">
                    <img src={player.strCutout} alt=" player img" className="card-2-top-img"/>
                </div>
                <div className="card-2-bottom card-3-bottom">
                    <div className="card-2-title">
                        <h2>{player.strPlayer}</h2>
                    </div>
                    <div className="card-2-info">
                        <p><strong>Sport:</strong> {player.strSport}</p>
                        <p><strong>Team:</strong> {player.strTeam}</p>
                        <p><strong>Position:</strong> {player.strPosition}</p>
                        <p><strong>Nationality:</strong> {player.strNationality}</p>
                        <p><strong>Gender:</strong> {player.strGender}</p>
                    </div>
                    <button className="card-2-btn">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerItem
