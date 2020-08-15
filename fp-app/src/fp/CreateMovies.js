import React, { useState } from 'react';
import { Button, TextField, Typography } from "@material-ui/core";
import {useHistory} from "react-router-dom"
import axios from 'axios';
const CreateMovies=()=>{
    const history=useHistory()
    const[inputTitle,setInputTitle]=useState("")
    const[inputDescription,setInputDescription]=useState("")
    const[inputYear,setInputYear]=useState("")
    const[inputReview,setInputReview]=useState("")
    const[inputGenre,setInputGenre]=useState("")
    const[inputRating,setInputRating]=useState("")
    const[inputImage,setInputImage]=useState("")
    const handleChange1=(event)=>{
        setInputTitle(event.target.value);
    }
    const handleChange2=(event)=>{
        setInputDescription(event.target.value);
    }
    const handleChange3=(event)=>{
        setInputYear(event.target.value);
    }
    const handleChange4=(event)=>{
        setInputGenre(event.target.value);
    }
    const handleChange5=(event)=>{
        setInputRating(event.target.value);
    }
    const handleChange6=(event)=>{
        setInputReview(event.target.value);
    }
    const handleChange7=(event)=>{
        setInputImage(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post(`https://backendexample.sanbersy.com/api/movies`,{
            title:inputTitle,
            description:inputDescription,
            year:inputYear,
            review:inputReview,
            genre:inputGenre,
            rating:inputRating,
            image_url:inputImage
        })
        .then(res=>{
            console.log(res);
            setInputTitle("")
            setInputYear("")
            setInputRating("")
            setInputGenre("")
            setInputReview("")
            setInputImage("")
            setInputDescription("")
            history.push("/movie")
        })
    }
    return(
        <div>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}><br/>
                <Typography component="h1" variant="subtitle">Create Movie</Typography>
                <form>
                <Typography component="h2" variant="subtitle1">
                <ol>
                    <li><strong style={{width: '100px'}}>Title: </strong></li> 
                    <TextField type="text" value={inputTitle} onChange={handleChange1}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Description: </strong></li> 
                    <TextField type="text" value={inputDescription} onChange={handleChange2}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Year: </strong></li> 
                    <TextField type="number" value={inputYear} onChange={handleChange3}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Genre: </strong></li> 
                    <TextField type="text" value={inputGenre} onChange={handleChange4}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Rating: </strong></li> 
                    <TextField type="number" value={inputRating} onChange={handleChange5}/><br/><br/>
                    <li><strong style={{width: '100px'}}>Review: </strong></li> 
                    <TextField type="text" value={inputReview} onChange={handleChange6}/><br/><br/>
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
export default CreateMovies;