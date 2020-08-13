import axios from "axios"
import React, {useState, useEffect} from "react"
import Style from './style.css'
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
    return(
        <><link href={Style} rel="stylesheet" />  
        <h1>Movies</h1>
        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Image</th>
            </tr>
        {
            movie!==null&&movie.map((el)=>{
                return(
                    <tr>
                        <td>{el.title}</td>
                        <td>{el.description}</td>
                        <td>{el.year}</td>
                        <td>{el.genre}</td>
                        <td>{el.rating}</td>
                        <td>{el.res}</td>
                        <td><img src={el.image_url} alt=""></img></td>
                    </tr>
                )
            })
        }
        </table>
        </>
    )
}
export default MoviesPage;