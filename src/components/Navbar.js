import React from 'react'
import Logo from '../img/sportsicon.png'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/sports">Sports</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/players">Players</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
