import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  
  const [userData,setUserData]=useState({
    email:'',
    password:'',
  })

  const InputHandler =(e)=>{
    setUserData(prev=>{
      const {name,value} = e.target;
      return{
        ...prev,
        [name]:value
      }
    })
  }

  return (
    <section className='register'>
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login_form">
          <p className='form form_error-message'>This is an error message</p>
          <input type="text" placeholder='email' name='email' value={userData.email} onChange={InputHandler} autoFocus/>
          <input type="password" placeholder='password' name='password' value={userData.password} onChange={InputHandler} />
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't have an Account?{<Link to={'/login'}>Sign Up</Link>}</small>
      </div>

    </section>
  )
}

export default Login