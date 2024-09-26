import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../helpers/axiosWithAuth";
import {useHistory} from "react-router-dom"


const Login = () => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("")

const history = useHistory();
  
  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]:e.target.value
    });
}


const handleSubmit = e => {
  e.preventDefault();
  axiosWithAuth()
  .post('/login', credentials)
  .then(res =>{
      localStorage.setItem('token',res.data.payload);
      history.push('/protected')
  })
  .catch(err =>{
      console.log(err.res)
  })
  if(credentials.username === '' || credentials.password === '' ) {
    setError("Username and Password are required")
  } 
}




  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input value={credentials.username} data-testid="username" name="username" type="text" onChange={handleChange} />
        <br></br>
        <label>Password:</label>
        <input value={credentials.password} data-testid="password" name="password" type="password" onChange={handleChange} />
        <br></br>
        <button>Login</button>
      </form>
    
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. [x]
//2. Add whatever state nessiary for form functioning. [x]
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password" [x]
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.