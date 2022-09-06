import React from 'react'

import './signup.css'

import '../img/user.png'

function Signup() {
  return (
    <div>
        <img src="../img/user.png" alt="" className='userimage'></img>
        <input type="text" placeholder='username' className='username'></input>
        <input type="text" placeholder='e-mail' className='email'></input>
        <input type="text" placeholder='password' className='password'></input>
        <button class="btn">Signup</button>
    </div>
    
  )
}


export default Signup