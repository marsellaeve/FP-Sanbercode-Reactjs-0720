import axios from "axios"
import React, {useState, useEffect} from "react"
import Style from './style.css'
import {Container,Button} from '@material-ui/core';
const TablePage=()=>{
    const [movie,setMovie]=useState(null)
    const [game,setGame]=useState(null)
    const [edited,setEdited]=useState(null)
    const [searchMovie,setSearchMovie]=useState(null)
    const [searchGame,setSearchGame]=useState(null)
    const [find,setFind]=useState(null)
    const [findG,setFindG]=useState(null)
    const [filter,setFilter]=useState(null)
    const [filter2,setFilter2]=useState(null)
    const [inputFilter,setInputFilter]=useState(null)
    const [inputFilter2,setInputFilter2]=useState(null)
    const [inputFilter3,setInputFilter3]=useState(null)
    const [inputFilter4,setInputFilter4]=useState(null)
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
        if(edited!==null){
            if(edited==='mtitle'){
                movie.sort(function(a, b){ if (a.title < b.title) return -1;
                    if (a.title > b.title) return 1; return 0;
                })
            }
            if(edited==='mdescription'){
                movie.sort(function(a, b){ if (a.description < b.description) return -1;
                    if (a.description > b.description) return 1; return 0;
                })
            }
            if(edited==='mgenre'){
                movie.sort(function(a, b){if (a.genre < b.genre) return -1;
                    if (a.genre > b.genre) return 1; return 0;
                })
            }
            if(edited==='mreview'){
                movie.sort(function(a, b){ if (a.review < b.review) return -1;
                    if (a.review > b.review) return 1; return 0;
                })
            }
            if(edited==='mrating'){
                movie.sort(function(a, b){return a.rating-b.rating})
            }
            if(edited==='myear'){
                movie.sort(function(a, b){return a.year-b.year})
            }
            if(edited==='gname'){
                game.sort(function(a, b){ if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1; return 0;
                })
            }
            if(edited==='ggenre'){
                game.sort(function(a, b){if (a.genre < b.genre) return -1;
                    if (a.genre > b.genre) return 1; return 0;
                })
            }
            if(edited==='gplatform'){
                game.sort(function(a, b){if (a.platform < b.platform) return -1;
                    if (a.platform > b.platform) return 1; return 0;
                })
            }
            if(edited==='gsingle'){
                game.sort(function(a, b){return a.singlePlayer-b.singlePlayer})
            }
            if(edited==='gmulti'){
                game.sort(function(a, b){return a.multiplayer-b.multiplayer})
            }
            if(edited==='grelease'){
                game.sort(function(a, b){return a.release-b.release})
            }
            setEdited(null)
        }
    })
    const handleFilter=(event)=>{
        event.preventDefault()
        setFilter(movie)
        let newMovieList=movie.filter(el=>el.year===parseInt(inputFilter))
        setFilter([...newMovieList])
        setInputFilter("")
    }
    const handleChangeFilter=(event)=>{
        setInputFilter(event.target.value);
    }
    const handleFilter2=(event)=>{
        event.preventDefault()
        setFilter(movie)
        let newMovieList=movie.filter(el=>el.genre===inputFilter2)
        setFilter([...newMovieList])
        setInputFilter2("")
    }
    const handleChangeFilter2=(event)=>{
        setInputFilter2(event.target.value);
    }
    const handleFilter3=(event)=>{
        event.preventDefault()
        setFilter2(game)
        let newGameList=game.filter(el=>el.release===inputFilter3)
        setFilter2([...newGameList])
        setInputFilter3("")
    }
    const handleChangeFilter3=(event)=>{
        setInputFilter3(event.target.value);
    }
    const handleFilter4=(event)=>{
        event.preventDefault()
        setFilter2(game)
        let newGameList=game.filter(el=>el.genre===inputFilter4)
        setFilter2([...newGameList])
        setInputFilter4("")
    }
    const handleChangeFilter4=(event)=>{
        setInputFilter4(event.target.value);
    }
    const handleSort=(event)=>{
        let temp=event.target.value;
        setEdited(temp)
    }
    const handleChange1=(event)=>{
        setSearchMovie(event.target.value);
    }
    const handleSearch1=(event)=>{
        event.preventDefault()
        let data=movie.find(el=>el.title===searchMovie)
        setFind({title:data.title,
            description:data.description,
            year:data.year,
            genre:data.genre,
            rating:data.rating,
            review:data.review
        })
        setSearchMovie("")
    }
    const handleChange2=(event)=>{
        setSearchGame(event.target.value);
    }
    const handleSearch2=(event)=>{
        event.preventDefault()
        let data=game.find(el=>el.name===searchGame)
        if(data!==null){
        setFindG({name:data.name,
            singlePlayer:data.singlePlayer,
            release:data.release,
            genre:data.genre,
            multiplayer:data.multiplayer,
            platform:data.platform
        })}
        setSearchGame("")
    }
    return(
        <>
        <Container>
        <div style={{paddingLeft:"100px",paddingRight:"100px",paddingTop:"100px"}}>
        <div style={{padding:"20px",backgroundColor:"lightgoldenrodyellow"}}>
        <link href={Style} rel="stylesheet" />  
        <h1>Movies</h1>
        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Review</th>
            </tr>
            <tr>
                <td><Button onClick={handleSort} value={"mtitle"} variant="contained">sort</Button></td>
                <td><Button onClick={handleSort} value={"mdescription"} variant="contained">sort</Button></td>
                <td><Button onClick={handleSort} value={"myear"} variant="contained">sort</Button></td>
                <td><Button onClick={handleSort} value={"mgenre"} variant="contained">sort</Button></td>
                <td><Button onClick={handleSort} value={"mrating"} variant="contained">sort</Button></td>
                <td><Button onClick={handleSort} value={"mreview"} variant="contained">sort</Button></td>
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
                        <td>{el.review}</td>
                        {/* <td><img src={el.image_url} alt=""></img></td> */}
                    </tr>
                )
            })
        }
        </table>
        <form onSubmit={handleSearch1}><br/>
            <label>Title Movie : </label>
            <input type="text" value={searchMovie} onChange={handleChange1}/>
            <button>Search</button>
        </form>
        {searchMovie!==null&&find!==null &&
            <p>
                Title: {find.title}<br/>
                Description : {find.description}<br/>
                Year : {find.year}<br/>
                Genre : {find.genre}<br/>
                Rating : {find.rating}<br/>
                Review : {find.review}<br/>
            </p>
        }
        <form onSubmit={handleFilter} style={{float:"left"}}><br/>
            <label>Year Movie : </label>
            <input type="text" value={inputFilter} onChange={handleChangeFilter}/>
            <button>Filter</button>
        </form>
        <form onSubmit={handleFilter2} style={{float:"right"}}><br/>
        <label>Genre Movie : </label>
            <input type="text" value={inputFilter2} onChange={handleChangeFilter2}/>
            <button>Filter</button>
        </form><br/><br/>
        {filter!==null && filter.map((filter)=>{
            return(
                <p>Title: {filter.title} | Description : {filter.description} | Year : {filter.year} | Genre : {filter.genre} | Rating : {filter.rating} | Review : {filter.review}</p>
            )
        })
        }
        </div></div>
        <div style={{paddingLeft:"100px",paddingRight:"100px",paddingBottom:"100px"}}>
        <div style={{padding:"20px",backgroundColor:"lightgoldenrodyellow"}}>
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
            <tr>
                <td><button onClick={handleSort} value={"gname"}>sort</button></td>
                <td><button onClick={handleSort} value={"ggenre"}>sort</button></td>
                <td><button onClick={handleSort} value={"gsingle"}>sort</button></td>
                <td><button onClick={handleSort} value={"gmulti"}>sort</button></td>
                <td><button onClick={handleSort} value={"gplatform"}>sort</button></td>
                <td><button onClick={handleSort} value={"grelease"}>sort</button></td>
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
        <form onSubmit={handleSearch2}><br/>
            <label>Name Game : </label>
            <input type="text" value={searchGame} onChange={handleChange2}/>
            <button>Search</button>
        </form>
        {searchGame!==null&&findG!==null &&
            <p>
                Name: {findG.name}<br/>
                Genre : {findG.genre}<br/>
                Singleplayer : {findG.singlePlayer}<br/>
                Multiplayer : {findG.multiplayer}<br/>
                Platform : {findG.platform}<br/>
                Release : {findG.release}<br/>
            </p>
        }
        <form onSubmit={handleFilter3} style={{float:"left"}}><br/>
            <label>Release Game : </label>
            <input type="text" value={inputFilter3} onChange={handleChangeFilter3}/>
            <button>Filter</button>
        </form>
        <form onSubmit={handleFilter4} style={{float:"right"}}><br/>
        <label>Genre Game : </label>
            <input type="text" value={inputFilter4} onChange={handleChangeFilter4}/>
            <button>Filter</button>
        </form><br/><br/>
        {filter2!==null && filter2.map((filter2)=>{
            return(
                <p>Name: {filter2.name} | Genre : {filter2.genre} | Singleplayer : {filter2.singlePlayer} | Multiplayer : {filter2.multiplayer} | Platform : {filter2.platform} | Release : {filter2.release}</p>
            )
        })
        }
        </div></div>
        </Container>
        </>
    )
}
export default TablePage;