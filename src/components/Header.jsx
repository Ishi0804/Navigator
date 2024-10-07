import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
