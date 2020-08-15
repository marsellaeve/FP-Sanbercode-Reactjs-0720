import React, { useState, useContext } from 'react';
import { Button, TextField, Typography,Container } from "@material-ui/core";
import {useHistory} from "react-router-dom"
import {EditContext} from "./EditContext"
import axios from 'axios';
const EditGames=()=>{
    const history=useHistory()
    const [edit,setEdit]=useContext(EditContext)
    const[inputName,setInputName]=useState(edit.name)
    const[inputGenre,setInputGenre]=useState(edit.genre)
    const[inputSingle,setInputSingle]=useState(edit.singlePlayer)
    const[inputMulti,setInputMulti]=useState(edit.multiplayer)
    const[inputPlatform,setInputPlatform]=useState(edit.platform)
    const[inputRelease,setInputRelease]=useState(edit.release)
    const[inputImage,setInputImage]=useState(edit.image_url)

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
        axios.put(`https://backendexample.sanbersy.com/api/games/${edit.id}`,{
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
            setEdit(null)
        })
    }
    return(
        <div>
            <Container>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}><br/>
                <Typography component="h1" variant="subtitle">Edit Game</Typography>
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
                    <Button variant="outlined" color="primary" onClick={handleSubmit}>Edit</Button>
                </ol>
                </Typography>
                </form>
            </div>
        </div> </Container>
      </div>
    )
}
export default EditGames;