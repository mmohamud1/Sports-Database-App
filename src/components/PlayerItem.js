import React from 'react'
import logo from '../img/player.png'

const PlayerItem = ({ player }) => {
    // Card for players without images
    if (player.strCutout === null ) {
        return (
            <div>
                <div className="card-2">
                    <div className="card-2-top">
                        <img src={logo} alt="player img" className="card-2-top-img card-2-top-img-2"/>
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
    // Card for players with images
    } else {
        return (
            <div>
                <div className="card-2">
                    <div className="card-2-top">
                        <img src={player.strCutout} alt="player img" className="card-2-top-img"/>
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
}

export default PlayerItem
