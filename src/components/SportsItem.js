import React from 'react'

const SportsItem = ({ sport }) => {
    return (
        <div>
            <img src={sport.strSportThumb} alt=""/>
        </div>
    )
}

export default SportsItem