import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";


function Emp(){

    const [docs,setdocs] = useState("")
    const [id,getId] = useState(localStorage.getItem("userId"))

    const navigate = useNavigate();

   const handleSubmit = (event)=>{
       console.log(event.target[0].value)
    event.preventDefault()
    setdocs(event.target[0].value)

    const data = new FormData();
    data.append("document", event.target[0].value);
    data.append('emp',true)

    const requestOptions = {
        method: 'POST',
        // headers: new Headers({
        //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImlzcyI6IlNlcnZlciIsImlkIjo1LCJleHAiOjE2NTQxNjgwMDl9.DXF4AKZt2tzoY1VJWXgj3OTgXdUjnQttu1_IRdnFdkWhhSYGQu9d_lH6oc37cPLnkNgGqcnyJiyWlv5JqJqaOg', 
        //    // 'Content-Type': 'application/x-www-form-urlencoded'
        // }), 
       // headers: {'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImlzcyI6IlNlcnZlciIsImlkIjo1LCJleHAiOjE2NTQxNjgwMDl9.DXF4AKZt2tzoY1VJWXgj3OTgXdUjnQttu1_IRdnFdkWhhSYGQu9d_lH6oc37cPLnkNgGqcnyJiyWlv5JqJqaOg'},
         body: data
    };
    fetch(`https://attorney1234.herokuapp.com/v1/upload/${id}/`, requestOptions)
        .then(response => response.json())
        .then((response)=>{
            console.log(response.status)
            return navigate('/emp2')
        }).catch((error)=>{
            console.log(error)
        })
   }

    return(

        <div className="main">
            <h1>Employee One</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-container">
            <label htmlFor="docs">Add Content:</label>
   <textarea id="docs" name="docs" rows="4" cols="50">

</textarea>
                </div>
        
                <div className="button-container">
          <input type="submit" value="Delegate"/>
        </div>
            </form>
        </div>
    )

}

export default Emp;