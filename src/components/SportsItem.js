import React from 'react'

const SportsItem = ({ sport }) => {
    return (
        <div className="card-1">
            <div className="card-1-top">
                <img src={sport.strSportThumb} alt="sport-img" className="card-1-img"/>
            </div>
            <div className="card-1-bottom">
                <h1 className="card-1-title">{sport.strSport}</h1>
                <button className="btn card-1-btn">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default SportsItem