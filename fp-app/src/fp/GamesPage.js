import axios from "axios"
import Style from './style.css'
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
            <h1>Daftar Game</h1>
            <div id="article-list">
            { game!==null&&game.map((game) => {
                return(
                <div key={game.id}>
                <img src={game.image_url} alt="game"></img>
                <div class="review">
                <a href><h3>{game.name}</h3></a>
                <h4>Platform : {game.platform}<br/>
                Year : {game.release}<br/>
                Genre : {game.genre}<br/>
                Single Player : {game.singlePlayer}<br/>
                Multi Player : {game.multiplayer}<br/>
                </h4>
                </div>
                <button onClick={handleDelete} value={game.id}>Delete</button>
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