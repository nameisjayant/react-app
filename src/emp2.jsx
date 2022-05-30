import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./login.css";
import tick from './tick.png'

function Emp2(){

    return(

        <div className="main">
            <h1>Employee Two</h1>
            <h3> Docs on Review</h3>
            <div class="row justify-content-between">
    <div className="col-4 ">
      Some Contents
    </div>
    <div className="col-4">
    <div className="button-container">
          <input type="submit" value="send for review"/>
    </div>
    </div>
  </div>
  <div style={{marginTop:"100px"}}>
  <h3> Successfully Review</h3>

  <div class="row justify-content-between">
    <div className="col-4 text-center">
      Some Contents
    </div>
    <div className="col-4">
    <img src={tick} style = {{width : "50px", height:"50px"}}/>
    </div>
  </div>
  </div>

  <div class="row justify-content-center">
      <Link to="/emp">Go to Employee </Link>
  </div>
        </div>
    )

}

export default Emp2;