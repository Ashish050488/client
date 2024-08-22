import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer_cotegories'>
      <li><Link to={'/post/categories/Agriculture'}>Agriculture</Link></li>
      <li><Link to={'/post/categories/Business'}>Businnes</Link></li>
      <li><Link to={'/post/categories/Education'}>Education</Link></li>
      <li><Link to={'/post/categories/Art'}>Art</Link></li>
      <li><Link to={'/post/categories/Investment'}>Investment</Link></li>
      <li><Link to={'/post/categories/Uncategorized'}>Uncategorized</Link></li>
      <li><Link to={'/post/categories/Weather'}>Weather</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved to &copy; Copyright,Ashish</small>
      </div>
    </footer> 
  )
}

export default Footer