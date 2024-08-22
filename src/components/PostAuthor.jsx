import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


const PostAuthor = () => {
  return (
    <Link className='post_author' to={`/posts/users/Ashish`}>
      <div className="post_author-avatar">
        <img src={logo} alt="" />
      </div>
      <div className="post_authot_details">
        <h5>By:Ashish</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor