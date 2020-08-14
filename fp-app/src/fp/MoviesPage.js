import axios from "axios"
import React, {useState, useEffect} from "react"
import Style from './style.css'
import { Button, Typography } from "@material-ui/core";
const MoviesPage=()=>{
    const [movie,setMovie]=useState(null)
    useEffect(()=>{
        if(movie===null){
            axios.get(`https://backendexample.sanbersy.com/api/movies`)
            .then((res)=>{
                setMovie(
                    res.data.map((item)=>{
                        return{
                            id:item.id,
                            title:item.title,
                            genre:item.genre,
                            year:item.year,
                            description:item.description,
                            rating:item.rating,
                            review:item.review,
                            image_url:item.image_url
                        }
                    })
                )
            })
        }
    })
    const handleDelete=(event)=>{
        let idMovie=parseInt(event.target.value);
        let newDaftarMovie=movie.filter(el=>el.id!==idMovie)
        axios.delete(`https://backendexample.sanbersy.com/api/movies/${idMovie}`)
        .then(res=>{
            console.log(res);
        })
        setMovie([...newDaftarMovie]);
    }
    return(
        <><div>
        <link href={Style} rel="stylesheet" />  
        <section>
            <Typography component="h1" variant="subtitle">Daftar Film</Typography><br/>
            <div id="article-list">
            { movie!==null&&movie.map((movie) => {
                return(
                <div key={movie.id}>
                <img src={movie.image_url} alt="film"></img>
                <div class="review">
                <Typography component="h2" variant="h6">{movie.title}</Typography><br/>
                <Typography component="h2" variant="body2">Rating : {movie.rating}<br/>
                Year : {movie.year}<br/>
                Genre : {movie.genre}
                </Typography><br/>
                <Typography component="h4" variant="body2">
                    <b>Deskripsi :</b> {movie.description}
                </Typography>
                <Typography component="h4" variant="body2">
                    <b>Review :</b> {movie.review}
                </Typography>
                </div>
                <Button variant="outlined" color="primary" onClick={handleDelete} value={movie.id}>Delete</Button>
                <hr/>
                </div>
                )})
            }
            </div>
            </section>
            </div>
        </>
    )
}
export default MoviesPage;