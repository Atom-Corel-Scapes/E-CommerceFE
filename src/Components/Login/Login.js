import './Login.css';
// import { useState } from 'react';
// import { useNavigate} from 'react-router-dom';
// import Link from "react-router-dom"
import {useDispatch } from "react-redux";
import { findUser } from '../Login/Slice.js';



function Login() {

  // const navigate = useNavigate();


  const dispatch = useDispatch();

const submit =(e)=>{
  e.preventDefault();

  const username = e.target.elements[0].value;
  const Password = e.target.elements[1].value;

  e.target.elements[0].value = "";
  e.target.elements[1].value = "";
        
  dispatch(findUser({username,Password}));
}


  
  return (
    <div >
      <h1 className=''>Amazon</h1>
      <div className='form'>
      <form onSubmit={submit} > 
        <h3>Login</h3>
        <input  type='text' placeholder='username' /><br/>
        <input   type='password' placeholder='🔐' /><br/>
        <button  type='submit' >submit</button>
        

      </form>
      </div>
     
    </div>
  );
}

export default Login;
