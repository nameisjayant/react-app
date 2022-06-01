import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./login.css";
import tick from './tick.png'
import axios from "axios";

function Emp2(){


const [data,setData] = useState([])
const [id,getId] = useState(localStorage.getItem("userId"))
  
  useEffect(()=>{
  axios.get(`https://attorney1234.herokuapp.com/v1/upload/${id}/`).then((response)=>{
    console.log(response.data)
    setData(response.data)
  })
  
  },[])

  const handleSubmit= ()=>{

  }
  

    return(
        <div className="main">
            <h1>Employee Two</h1>
            <h3> Docs on Review</h3>
             {
               data.map((res,id)=>{
                 return(
                  <React.Fragment key={id}>
                   {
                (() => {
                    if(res.emp) {
                          return(
                            <React.Fragment>
                            <div className="d-flex justify-between">
                              {res.document}
                              <div className="px-5" >
                                <Link to="/boss">send for review </Link>
                              </div>
                            </div>
                            </ React.Fragment>
                          )
                        } 
                })()}  
                   </ React.Fragment>
                 )
               })
             }
           

  <div style={{marginTop:"100px"}}>
  <h3> Successfully Review</h3>


  {
               data.map((res)=>{
                 return(
                   <>
                  
                   {
                (() => {
                    if(res.boss) {
                          return(
                            <>
                             <div className="d-flex justify-between">
                   <div className=""></div>
                            {res.document}
                            <div className="px-5">
                            <img src={tick} style = {{width : "30px", height:"30px"}}/>
                    </div>
                    </div>
                            </>
                          )
                        } 
                })()}  
                   
                   </>
                 )
               })
             }

  </div>

        </div>
    )

}

export default Emp2;