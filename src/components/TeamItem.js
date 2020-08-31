import React from 'react'

const TeamItem = ({ team }) => {
    return (
        <div className="card-2">
            <div className="card-2-top">
                <img src={team.strTeamBadge} alt="team badge" className="card-2-top-img"/>
            </div>
            <div className="card-2-bottom">
                <div className="card-2-title">
                    <h2>{team.strTeam}</h2>
                </div>
                <div className="card-2-info">
                    <p><strong>Sport:</strong> {team.strSport}</p>
                    <p><strong>Country:</strong> {team.strCountry}</p>
                    <p><strong>League:</strong> {team.strLeague}</p>
                    <p><strong>Stadium:</strong> {team.strStadium}</p>
                    <p><strong>Location:</strong> {team.strStadiumLocation}</p>
                </div>
                <button className="card-2-btn">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default TeamItem
