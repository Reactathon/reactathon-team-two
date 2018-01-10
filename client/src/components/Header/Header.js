import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header-container">
            <Link to="/" className="home">Home</Link>
            <Link to="/about" className="nav-items">About</Link>
            <Link to="/signin" className="nav-items">Sign In</Link>
            <Link to="/register" className="nav-items">Create Account</Link>
        </div>
    )
}

export default Header