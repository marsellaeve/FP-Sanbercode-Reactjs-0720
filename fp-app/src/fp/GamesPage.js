import axios from "axios"
import Style from './style.css'
import React, {useState, useEffect} from "react"
import { Typography,Button } from "@material-ui/core";
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
                            release:item.release,
                            image_url:item.image_url
                        }
                    })
                )
            })
        }
    })
    const handleDelete=(event)=>{
        let idGame=parseInt(event.target.value);
        let newDaftarGame=game.filter(el=>el.id!==idGame)
        axios.delete(`https://backendexample.sanbersy.com/api/games/${idGame}`)
        .then(res=>{
            console.log(res);
        })
        setGame([...newDaftarGame]);
    }
    return(
        <><div>
        <link href={Style} rel="stylesheet" />
        <section>
            <Typography component="h1" variant="subtitle">Daftar Game</Typography><br/>
            <div id="article-list">
            { game!==null&&game.map((game) => {
                return(
                <div key={game.id}>
                <img src={game.image_url} alt="game"></img>
                <div class="review">
                <Typography component="h2" variant="h6">{game.name}</Typography><br/>
                <Typography component="h2" variant="body2">Platform : {game.platform}<br/>
                Year : {game.release}<br/>
                Genre : {game.genre}<br/>
                Single Player : {game.singlePlayer}<br/>
                Multi Player : {game.multiplayer}<br/>
                </Typography>
                </div>
                <Button variant="outlined" color="primary" onClick={handleDelete} value={game.id}>Delete</Button>
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
export default GamesPage;