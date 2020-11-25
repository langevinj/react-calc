import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav(){
    return (
        <ul className="Navbar">
            <li><Link to="/calc">Back to the Calculator</Link></li>
        </ul>
    )
}

export default Nav; 