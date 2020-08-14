import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { Button, TextField } from "@material-ui/core";

const LoginPage = () => {
    const history=useHistory();
    const [user,setUser]=useContext(UserContext);
    const [login,setLogin]=useState(null);
    const [iUsername,setIUsername]=useState("")
    const [iPassword,setIPassword]=useState("")
    const [tanda,setTanda]=useState("")
    useEffect(()=>{
      if(login===null){
        axios.get(`https://backendexample.sanbersy.com/api/users`)
        .then(res=>{
          setLogin(res.data.map(el=>{
            return{id:el.id,username:el.username,password:el.password}
          }));
        })
        
      }
    },[login])
    const handleLogin=(event)=>{
      event.preventDefault()
      let name=login.find(x=>x.username===iUsername)
      if(name.password===iPassword&&user==="belum"){
        setUser("sudah");
        history.push("/table");
      }
    }
    const handleRegister=(event)=>{
      event.preventDefault()
      // if(login.filter(x=>x.username===iUsername)===null){
        console.log("masuk");
        axios.post(`https://backendexample.sanbersy.com/api/users`,
        {username:iUsername,password:iPassword})
        .then(res=>{
          setLogin([...login,{username:iUsername,password:iPassword}])
        })
      // }
      setTanda(iUsername+" sudah registrasi")
      setIUsername("")
      setIPassword("")
    }
    const handlePassword=(event)=>{
      event.preventDefault()
      let username=login.find(x=>x.username===iUsername)
      axios.put(`https://backendexample.sanbersy.com/api/users/${username.id}`,{
        password:iPassword
      })
      .then(res=>{
        username.password=iPassword
        setLogin([...username])
      })
      setTanda(iUsername+" sudah ganti password")
      setIUsername("")
      setIPassword("")
    }
    const handleChange1=(event)=>{
      setIUsername(event.target.value)
    }
    const handleChange2=(event)=>{
      setIPassword(event.target.value)
    }
    return(
      <div>
         <style>
                {`input{
                    font-family: serif;
                    width: 80%;
                    height: 20px;
                    padding: 12px 20px;
                    box-sizing: border-box;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    background-color: #f8f8f8;
                    resize: none;
                }
                .button {
                    background-color: #1c87c9;
                    border: none;
                    color: white;
                    padding: 20px 34px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 20px;
                    margin: 4px 2px;
                    cursor: pointer;
                `}
            </style>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}>
                <h1 style={{textAlign: 'center'}}>Masuk</h1>
                <form>
                <ol>
                    <li><strong style={{width: '100px'}}>Username: </strong></li> 
                    <input type="text" value={iUsername} onChange={handleChange1}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Password: </strong></li> 
                    <input type="text" value={iPassword} onChange={handleChange2}/><br/><br/>
                    <button  onClick={handleLogin}>Login</button>
                    <button  onClick={handleRegister}>Register</button>
                    <button  onClick={handlePassword}>Ganti Password</button>
                    <p>{tanda}</p>
                </ol>
                </form>
            </div>
        </div> 
      </div>
    )
}

export default LoginPage;