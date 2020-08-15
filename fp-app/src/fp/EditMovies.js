import React, { useState, useContext } from 'react';
import { Button, TextField, Typography,Container } from "@material-ui/core";
import {useHistory} from "react-router-dom"
import {EditContext} from "./EditContext"
import axios from 'axios';
const EditGames=()=>{
    const history=useHistory()
    const [edit,setEdit]=useContext(EditContext)
    const[inputTitle,setInputTitle]=useState(edit.title)
    const[inputDescription,setInputDescription]=useState(edit.description)
    const[inputYear,setInputYear]=useState(edit.year)
    const[inputReview,setInputReview]=useState(edit.review)
    const[inputGenre,setInputGenre]=useState(edit.genre)
    const[inputRating,setInputRating]=useState(edit.rating)
    const[inputImage,setInputImage]=useState(edit.image_url)
    
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
        axios.put(`https://backendexample.sanbersy.com/api/movies/${edit.id}`,{
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
            setEdit(null)
        })
    }
    return(
        <div>
            <Container>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}><br/>
                <Typography component="h1" variant="subtitle">Edit Movies</Typography>
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