import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <ul className='conatiner-ul'>
                <li>
                    <NavLink to="/home" className="nav">Home</NavLink>
                </li>
            </ul>

            <NavLink to="/" className="nav1">
                SignIn</NavLink>


            <NavLink to="/" className="nav1">
                Logout
            </NavLink>

        </div>
    )
}

export default Navbar