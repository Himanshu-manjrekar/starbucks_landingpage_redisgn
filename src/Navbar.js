import React from 'react'
import Content from './Content';
import logo from './images/logo.png';


import "./Navbar.css";

function Navbar() {
    return (
        <section>
            <header className="app__header">
                <img src={logo} className="app__logo" alt="logo" />
                <ul className="app__menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>

        </section>




    )
}

export default Navbar
