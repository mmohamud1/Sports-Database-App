import React, { useEffect } from 'react';

const Sports = ({ listSports }) => {
    useEffect(() => {
        listSports();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div>
            
        </div>
    )
}

export default Sports
