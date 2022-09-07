import './Login.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
// import Link from "react-router-dom"


function Login() {

  const navigate = useNavigate();

  
  const [username, setUserName] = useState('');
  const[passWord,setPassWord] = useState(''); 

// let data = {
//   username , passWord
// }

//  const fetchAPI = ("https://http://localhost:5000/login", {
//             method: "POST",
//            body:  JSON.stringify(data)
//          })
//            .then(function(response){ 
//            return response.json();   
//         }) 
             

   function submit(e) {
    e.preventDefault();
    console.log(username,passWord);
    
  }

  
  return (
    <div >
      <h1 className=''>Amazon</h1>
      <div className='form'>
      <form  > 
        <h3>Login</h3>
        <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='username' /><br/>
        <input  onChange={(e) => setPassWord(e.target.value)} type='password' placeholder='🔐' /><br/>
        <button onClick={submit} type='submit' >submit</button>
        

      </form>
      </div>
     
    </div>
  );
}

export default Login;
