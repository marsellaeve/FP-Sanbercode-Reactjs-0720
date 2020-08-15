import React, { useState } from 'react';
import { Button, TextField, Typography } from "@material-ui/core";
import {useHistory} from "react-router-dom"
import axios from 'axios';
const CreateGames=()=>{
    const history=useHistory()
    const[inputName,setInputName]=useState("")
    const[inputGenre,setInputGenre]=useState("")
    const[inputSingle,setInputSingle]=useState("")
    const[inputMulti,setInputMulti]=useState("")
    const[inputPlatform,setInputPlatform]=useState("")
    const[inputRelease,setInputRelease]=useState("")
    const[inputImage,setInputImage]=useState("")
    const handleChange1=(event)=>{
        setInputName(event.target.value);
    }
    const handleChange2=(event)=>{
        setInputGenre(event.target.value);
    }
    const handleChange3=(event)=>{
        setInputSingle(event.target.value);
    }
    const handleChange4=(event)=>{
        setInputMulti(event.target.value);
    }
    const handleChange5=(event)=>{
        setInputPlatform(event.target.value);
    }
    const handleChange6=(event)=>{
        setInputRelease(event.target.value);
    }
    const handleChange7=(event)=>{
        setInputImage(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post(`https://backendexample.sanbersy.com/api/games`,{
            name:inputName,
            genre:inputGenre,
            singlePlayer:inputSingle,
            multiplayer:inputMulti,
            platform:inputPlatform,
            release:inputRelease,
            image_url:inputImage
        })
        .then(res=>{
            console.log(res);
            setInputName("")
            setInputGenre("")
            setInputSingle("")
            setInputMulti("")
            setInputPlatform("")
            setInputRelease("")
            setInputImage("")
            history.push("/game")
        })
    }
    return(
        <div>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}><br/>
                <Typography component="h1" variant="subtitle">Create Game</Typography>
                <form>
                <Typography component="h2" variant="subtitle1">
                <ol>
                    <li><strong style={{width: '100px'}}>Name: </strong></li> 
                    <TextField type="text" value={inputName} onChange={handleChange1}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Genre: </strong></li> 
                    <TextField type="text" value={inputGenre} onChange={handleChange2}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Single Player: </strong></li> 
                    <TextField type="number" value={inputSingle} onChange={handleChange3}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Multi Player: </strong></li> 
                    <TextField type="number" value={inputMulti} onChange={handleChange4}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Platform: </strong></li> 
                    <TextField type="text" value={inputPlatform} onChange={handleChange5}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Release: </strong></li> 
                    <TextField type="number" value={inputRelease} onChange={handleChange6}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Image URL: </strong></li> 
                    <TextField type="text" value={inputImage} onChange={handleChange7}/><br/><br/>
                    <Button variant="outlined" color="primary" onClick={handleSubmit}>Create</Button>
                </ol>
                </Typography>
                </form>
            </div>
        </div> 
      </div>
    )
}
export default CreateGames;