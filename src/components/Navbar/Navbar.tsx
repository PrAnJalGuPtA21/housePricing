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

            <NavLink to="/signup" className="nav1">
                Sign Up</NavLink>


            <NavLink to="/signin" className="nav1">
                Log out
            </NavLink>

        </div>
    )
}

export default Navbar