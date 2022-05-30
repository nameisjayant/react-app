import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./login.css";


function Emp(){

    return(

        <div className="main">
            <h1>Employee One</h1>
            <form>
            <div className="input-container">
            <label for="docs">Add Content:</label>
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