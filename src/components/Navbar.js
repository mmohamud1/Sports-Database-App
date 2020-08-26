import React from 'react'
import Logo from '../img/sportsicon.png'

const Navbar = () => {
    return (
        <nav className="nav">
            <button className="nav-menu">
                <i class="fas fa-bars"></i>
            </button>

            <div className="nav-content">
                <div className="nav-content-logo">
                    <img src={Logo} alt="logo"  className="nav-content-logo-img" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
