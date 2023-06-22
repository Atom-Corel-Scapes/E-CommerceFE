import React from 'react'
import {useDispatch } from "react-redux";
import { newUser } from '../../Redux/SignupSlice';
import './signup.css'
import {Link} from "react-router-dom"
import Login from '../Login/Login';
import App from '../../App';


function Signup() {

  const dispatch = useDispatch();
  const handlesignup = (e) =>{
    const userName = e.target.elements[0].value;
    const userEmail = e.target.elements[1].value;
    const userPassword = e.target.elements[2].value;
    const userImage = e.target.elements[3].value;
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    e.target.elements[2].value = "";
    e.target.elements[3].value = "";
    e.preventDefault();
    dispatch(newUser({userName,userEmail,userPassword,userImage}));
  }

  return (
    <div className='background'>
      <form onSubmit={handlesignup}>
      <h1 className='topheading'>Signup</h1> 
        <img src="../img/user.png" alt="" className='userimage'></img>
        <input type="text" placeholder='username' className='username'></input>
        <input type="email" placeholder='e-mail' className='email'></input>
        <input type="password" placeholder='password' className='password'></input>
        <input type="text" placeholder='imageurl' className='image'></input>
        <button className="btn">Signup</button>
        <button><Link to="/Login">login</Link></button>
        <button className='Dbutton'><Link to="/display">Display</Link></button>
        {/* <span>{error}</span> */}
    </form>
    </div>
    
  )
}

export default Signup
