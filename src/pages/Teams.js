import React from 'react';
import TeamSearch from '../components/TeamSearch'


const Teams = ({ getTeams, teams }) => {

    return (
        <div className="team-bg">
            <TeamSearch getTeams={getTeams}/>
            <div className="grid-3 teams-container">
                {teams.map(team => (
                    <img key={team.idTeam} src={team.strTeamBadge} alt="Team Badge" style={{ width: '100px', height: '100px'}}/>
                ))}
            </div>
        </div>
    )
}

export default Teams
