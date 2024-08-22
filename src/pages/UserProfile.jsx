import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaEdit,FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar,setAvatar]=useState(logo);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [currentPassword,setPassword]=useState('')
  const [newPassword,setNewPassword]=useState('')
  const [ConfirmNewPassword,setConfirmNewPassword]=useState('')


  return (
    <section className='profile'>
      <div className="container profile_container">
        <Link to={`/myposts/ashish`} className='btn'>My posts</Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={logo} alt="" />
            </div>
            {/* from to update avatar */}
            <form className='avatar_form'>
              <input type="file" name='avatar' id='avatar' onChange={e=>setAvatar(e.target.files[0])} accept='png,jpg,jpeg' /><label htmlFor="avatar"><faEdit/></label>
            </form>
              <button className='profile_avatar-btn'><FaCheck/></button>
          </div>
          <h1>Ashish Ranjan</h1>

          {/* form to update user details */}

          <form className='form profile_form'>
            <p className='form_error-message'>This is an error message</p>
            <input type="text" placeholder='Full name'  value={name} onChange={e=>setName(e.target.value)} id="" />
            <input type="email" placeholder='email'  value={email} onChange={e=>setEmail(e.target.value)} id="" />
            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e=>setPassword(e.target.value)} id="" />
            <input type="password" placeholder='New Password'  value={newPassword} onChange={e=>setNewPassword(e.target.value)} id="" />
            <input type="password" placeholder='Confirm New Password'  value={ConfirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)} id="" />
            <button type='submit' className='btn primary'>Update Details </button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default UserProfile