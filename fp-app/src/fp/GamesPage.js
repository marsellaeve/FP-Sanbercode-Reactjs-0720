import axios from "axios"
import React, {useState, useEffect} from "react"
const GamesPage=()=>{
    const [game,setGame]=useState(null)
    useEffect(()=>{
        if(game===null){
            axios.get(`https://backendexample.sanbersy.com/api/games`)
            .then((res)=>{
                setGame(
                    res.data.map((item)=>{
                        return{
                            id:item.id,
                            name:item.name,
                            genre:item.genre,
                            singlePlayer:item.singlePlayer,
                            multiplayer:item.multiplayer,
                            platform:item.platform,
                            release:item.release
                        }
                    })
                )
            })
        }
    })
    return(
        <>
        <h1>Games</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Single Player</th>
                <th>Multi Player</th>
                <th>Platform</th>
                <th>Release</th>
            </tr>
        {
            game!==null&&game.map((el)=>{
                return(
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.genre}</td>
                        <td>{el.singlePlayer}</td>
                        <td>{el.multiplayer}</td>
                        <td>{el.platform}</td>
                        <td>{el.release}</td>
                    </tr>
                )
            })
        }
        </table>
        </>
    )
}
export default GamesPage;