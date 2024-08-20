import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className='nav_logo'>
          <img src={logo} alt="" />
        </Link>
        <ul className='nav_menu'>
            <li><Link to={'/profile'}>Ashish</Link></li>
            <li><Link to={'/create'}>Create Post</Link></li>
            <li><Link to={'/authors'}>Authors</Link></li>
            <li><Link to={'/logout'}>Logout</Link></li>
            <button className='nav_toggle-btn'>
            <AiOutlineClose />
            </button>
        </ul>
      </div>
    </nav>
  )
}

export default Header