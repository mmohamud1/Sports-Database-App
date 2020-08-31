import React from 'react';
import TeamSearch from '../components/TeamSearch';
import TeamItem from '../components/TeamItem'
import Spinner from '../components/Spinner'


const Teams = ({ getTeams, teams, loading }) => {
    if(loading) {
        return (
            <div className="team-bg">
                <TeamSearch/>
                <Spinner />
            </div>
        )
    } else {
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
}

export default Teams
