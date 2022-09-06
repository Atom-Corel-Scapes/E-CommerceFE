import React from 'react'

import {useDispatch } from "react-redux";

import './signup.css'

import '../img/user.png'

import { newUser } from '../Redux/SignupSlice.js';

function Signup() {

  const dispatch = useDispatch();
  // const [error, seterror] = useState('');

  const handlesignup = (e) =>{
    const userName = e.target.elements[0].value;
    const Email = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    e.target.elements[2].value = "";
    e.preventDefault();
    dispatch(newUser(userName,Email,password));
  }

  return (
    <form onSubmit={handlesignup}>
        <img src="../img/user.png" alt="" className='userimage'></img>
        <input type="text" placeholder='username' className='username'></input>
        <input type="email" placeholder='e-mail' className='email'></input>
        <input type="password" placeholder='password' className='password'></input>
        <button class="btn">Signup</button>
        {/* <span>{error}</span> */}
    </form>
    
  )
}


export default Signup
