import React from 'react';
import TeamSearch from '../components/TeamSearch'
import Spinner from '../components/Spinner'

const Teams = ({ getTeams, teams, loading }) => {

    return (
        <div>
            <TeamSearch getTeams={getTeams}/>
            {loading ? (
                <Spinner />
            ) : (
                <div className="team-card">
                    <div className="team-card-top">
                        <img src={teams} alt=""/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Teams
