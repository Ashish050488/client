import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
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
        <h2>Sign Up</h2>
        <form className="form register_form">
          <p className='form form_error-message'>This is an error message</p>
          <input type="text" placeholder='name' name='name' value={userData.name} onChange={InputHandler} />
          <input type="text" placeholder='email' name='email' value={userData.email} onChange={InputHandler} />
          <input type="password" placeholder='password' name='password' value={userData.password} onChange={InputHandler} />
          <input type="password" placeholder='confirmPassword' name='confirmPassword' value={userData.confirmPassword} onChange={InputHandler} />
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an Account?{<Link to={'/login'}>Sign IN</Link>}</small>
      </div>

    </section>
  )
}

export default Register