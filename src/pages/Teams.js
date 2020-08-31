import React from 'react';
import TeamSearch from '../components/TeamSearch';
import TeamItem from '../components/TeamItem'


const Teams = ({ getTeams, teams }) => {

    return (
        <div className="team-bg">
            <TeamSearch getTeams={getTeams}/>
            <div className="grid-3 teams-container">
                {teams.map(team => (
                    <TeamItem key={team.idTeam} team={team} />
                ))}
            </div>
        </div>
    )
}

export default Teams
