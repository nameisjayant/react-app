
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./login.css";
import tick from './tick.png'
import axios from "axios";
function Boss(){

    const [data,setData] = useState([]);
    const [id,getId] = useState(localStorage.getItem("userId"))

    useEffect(()=>{
  axios.get(`https://attorney1234.herokuapp.com/v1/upload/${id}/`).then((response)=>{
    console.log(response.data)
    setData(response.data)
  })
  
  },[])

  const accept = (e)=>{
        e.preventDefault();
        var content_id = e.target[0].value;
        const form = new FormData();
        form.append('emp',false)
        form.append('boss',true)

        axios.patch(`https://attorney1234.herokuapp.com/v1/upload/${content_id}/`,
        form
        ).then((response)=>{
            axios.get(`https://attorney1234.herokuapp.com/v1/upload/${id}/`,
        ).then((response)=>{
            setData(response.data)
        })
        })
  }

  const Delete = (e)=>{
    e.preventDefault();
    var content_id = e.target[0].value;
    axios.delete(`https://attorney1234.herokuapp.com/v1/upload/${content_id}/`,
    ).then((response)=>{
        axios.get(`https://attorney1234.herokuapp.com/v1/upload/${id}/`,
    ).then((response)=>{
        setData(response.data)
    })
    })
}

  

    return(

        <div className="main">
            <h1>Boss</h1>
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
                            <div className="d-flex align-items-center justify-between">
                              {res.document}
                              <div className="px-5 d-flex" >
                              <form onSubmit={accept}>
                              <input type="hidden" value={res.id} />
                              <input type="submit" value="Accept" />
                              </form>
                              <form onSubmit={Delete}>
                              <input type="hidden" value={res.id} />
                              <input type="submit" className="mx-3 bg-danger text-white" value="Delete"/>
                              </form>
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
  <div class="row justify-content-center">
    
      <Link to="/emp2">Go to Employee Two </Link>
  </div>

        </div>
    )

}

export default Boss;