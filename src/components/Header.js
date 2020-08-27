import React from 'react'

const Header = () => {
    // toggle nav button 
    const toggle = () => {
        document.body.classList.toggle('show-nav')
    }

    return (
        <header className="header">
            <button id="toggle" class="toggle" onClick={toggle}>
                <i class="fa fa-bars fa-2x"></i>
            </button>
            <h1>Sports Database</h1>
            <p>In this website you can search for any athlete from any team in any sport. Enjoy :)</p>
        </header>
    )
}

export default Header
