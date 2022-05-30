
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./login.css";
import tick from './tick.png'

function Boss(){

    return(

        <div className="main">
            <h1>Boss</h1>
            <h3> Docs on Review</h3>
            <div class="row justify-content-between">
    <div className="col-4 ">
      Some Contents
    </div>
    <div className="col-4">
    <div className="button-container">
          <input type="submit" value="Accept"/>
    </div>
    </div>
  </div>
  <div class="row justify-content-center">
    
      <Link to="/emp2">Go to Employee Two </Link>
  </div>

        </div>
    )

}

export default Boss;