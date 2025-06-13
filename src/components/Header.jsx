import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="main-header">
            <div className="logo">Recruit<span>Boost</span></div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
