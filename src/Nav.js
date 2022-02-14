import React from "react";
import globe from "../src/img/world.png"
import '../src/Nav.css'


const Nav = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={globe} alt="logo" className="navbar-logo"></img>
            </div>

            <div>
                <h3 className="navbar-title">my travel journal.</h3>
            </div>
        </nav>
    )
}

export default Nav;