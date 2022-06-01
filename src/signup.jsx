import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link,useNavigate } from "react-router-dom";

import "./login.css";

function Register() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [code,setCode] = useState("red")
  const [error,setError] = useState("")
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault()
    var email = event.target[0].value
    var password = event.target[1].value

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    
        const requestOptions = {
          method: 'POST',
          body: data
      };
      fetch('https://attorney1234.herokuapp.com/v1/create/', requestOptions)
          .then(response => response.json())
          .then((response)=>{
            if(response.code == 201){
              setCode("green")
              setIsSubmitted(true)
              console.log(response.code)
              setError("Login Successful")
              localStorage.setItem("token",response.data['token'])
              localStorage.setItem('userId',response.data['userId'])
              redirecting()
            }else{
              setCode("red")
              setIsSubmitted(false)
              setError("Wrong Email & Password")
              console.log(response.code)
            }
          });

  };


  const redirecting = ()=>{
    return navigate('/emp')
  }
  
  
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
        
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div style={{marginTop:"20px"}}>
            <p>Already have an account? <Link to="/login">Login</Link> </p>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
        {isSubmitted ? <div>User is successfully created</div> : renderForm}
      </div>
    </div>
  );
}

export default Register;
