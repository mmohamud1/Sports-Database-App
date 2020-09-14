import React, { useEffect } from 'react';
import SportsItem from '../components/SportsItem';
import Spinner from '../components/Spinner';

const Sports = ({ listSports, sports, loading }) => {
    // Get sports data as component mounts
    useEffect(() => {
        listSports();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="grid-4 my-3 px-2">
                {sports.map(sport => (
                    <SportsItem key={sport.idSport} sport={sport}/>
                ))}
            </div>
        );
    };  
};

export default Sports;
