import axios from "axios"
import Style from './style.css'
import React, {useState, useEffect} from "react"
import { Typography } from "@material-ui/core";
const ListGame=()=>{
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
                            release:item.release,
                            image_url:item.image_url
                        }
                    })
                )
            })
        }
    })
    return(
        <><div>
        <link href={Style} rel="stylesheet" />
        <section>
            <Typography component="h1" variant="subtitle">List Game</Typography><br/><hr/><br/><ol>
            {
                game!==null&&game.map((game)=>{
                    return(
                        <li><Typography component="h2" variant="body2">{game.name}</Typography></li>
                    )
                })
            }</ol>
            <br/><hr/><br/><Typography component="h1" variant="subtitle">Data Game</Typography><br/><hr/>
            <div id="article-list">
            { game!==null&&game.map((game) => {
                return(
                <div key={game.id}>
                <div class="review">
                <Typography component="h1" variant="h6">{game.name}</Typography><br/>
                <Typography component="h1" variant="body2">
                    Platform : {game.platform}<br/>
                    Year : {game.release}<br/>
                    Genre : {game.genre}<br/>
                    Single Player : {game.singlePlayer}<br/>
                    Multi Player : {game.multiplayer}<br/>
                </Typography>
                </div>
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
export default ListGame;