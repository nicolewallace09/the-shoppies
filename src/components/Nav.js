import React from 'react'
import Logo from "../images/shopify-logo.png"

function Nav () {

    return (
        <>
        
        <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><img src={Logo} className="logo" alt="shopify-logo"/></span>
            </div>
        </nav>
        </>
    )
}

export default Nav; 