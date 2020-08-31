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
                <div className="card-2-league">
                    <p><strong>Sport:</strong> {team.strSport}</p>
                    <p><strong>Country:</strong> {team.strCountry}</p>
                    <p><strong>League:</strong> {team.strLeague}</p>
                    <p><strong>Stadium:</strong> {team.strStadium}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamItem
