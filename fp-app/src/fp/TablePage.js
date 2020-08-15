import axios from "axios"
import React, {useState, useEffect, useContext} from "react"
import {useHistory,Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';  
import {EditContext} from "./EditContext"
import {Button,Typography,Table,TextField,TableBody,TableCell,TableHead,TableRow,TableContainer} from '@material-ui/core';
const TablePage=()=>{
    const history=useHistory()
    const [,setEdit]=useContext(EditContext)
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
                            release:item.release,
                            image_url:item.image_url
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
    const handleEdit=(event)=>{
        let idMovie=parseInt(event.target.value);
        let data=movie.find(el=>el.id===idMovie)
        if(data!==null){
            setEdit({id:data.id,title:data.title,
                description:data.description,
                year:data.year,
                genre:data.genre,
                rating:data.rating,
                review:data.review,
                image_url:data.image_url})
                history.push("/movie/edit")
        }
    }
    const handleEdit2=(event)=>{
        let idGames=parseInt(event.target.value);
        let data=game.find(el=>el.id===idGames)
        if(data!==null){
            setEdit({id:idGames,name:data.name,
                singlePlayer:data.singlePlayer,
                release:data.release,
                genre:data.genre,
                multiplayer:data.multiplayer,
                platform:data.platform,
                image_url:data.image_url})
                history.push("/game/edit")
        }
    }
    return(
        <>
        <div style={{paddingLeft:"100px",paddingRight:"100px",paddingTop:"100px"}}>
        <div style={{padding:"20px",backgroundColor:"lightgoldenrodyellow"}}>
        
        <Typography component="h1" variant="h4">Movies</Typography><br/>
        <TableContainer component={Paper}> 
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Review</TableCell>
                <TableCell>Edit</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell><Button onClick={handleSort} value={"mtitle"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"mdescription"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"myear"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"mgenre"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"mrating"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"mreview"}>sort</Button></TableCell>
                <TableCell></TableCell>
            </TableRow>
        {
            movie!==null&&movie.map((el)=>{
                return(
                    <TableRow component="th" scope="row">
                        <TableCell>{el.title}</TableCell>
                        <TableCell>{el.description}</TableCell>
                        <TableCell>{el.year}</TableCell>
                        <TableCell>{el.genre}</TableCell>
                        <TableCell>{el.rating}</TableCell>
                        <TableCell>{el.review}</TableCell>
                        <TableCell><button onClick={handleEdit} value={el.id}>Edit</button></TableCell>
                    {/* <td><img src={el.image_url} alt=""></img></td> */}
                    </TableRow>
                )
            })
        }
        </TableBody></Table></TableContainer><br/>
        <Typography component="h2" variant="subtitle1">
        <Link to="/movie/create" style={{float:"right",backgroundColor:"black",color:"white"}}>CREATE</Link>
        </Typography>
        <form onSubmit={handleSearch1}><br/>
        <Typography component="h2" variant="subtitle1">
            <label>Title Movie : </label>
            <TextField type="text" value={searchMovie} onChange={handleChange1}/>
            <button>Search</button>
            </Typography>
        </form>
        {searchMovie!==null&&find!==null &&
            <Typography component="h2" variant="body2"><p><br/>
                Title: {find.title}<br/>
                Description : {find.description}<br/>
                Year : {find.year}<br/>
                Genre : {find.genre}<br/>
                Rating : {find.rating}<br/>
                Review : {find.review}<br/>
            </p></Typography>
        }
        <form onSubmit={handleFilter} style={{float:"left"}}><br/>
        <Typography component="h2" variant="subtitle1">
            <label>Year Movie : </label>
            <TextField type="text" value={inputFilter} onChange={handleChangeFilter}/>
            <button>Filter</button>
        </Typography>
        </form>
        <form onSubmit={handleFilter2} style={{float:"right"}}><br/>
        <Typography component="h2" variant="subtitle1">
        <label>Genre Movie : </label>
            <TextField type="text" value={inputFilter2} onChange={handleChangeFilter2}/>
            <button>Filter</button>
        </Typography>
        </form><br/><br/>
        {filter!==null && filter.map((filter)=>{
            return(
                <Typography component="h2" variant="body2"><br/>
                <p>Title: {filter.title} | Description : {filter.description} | Year : {filter.year} | Genre : {filter.genre} | Rating : {filter.rating} | Review : {filter.review}</p>
                </Typography>
            )
        })
        }
        </div></div>
        <div style={{paddingLeft:"100px",paddingRight:"100px",paddingBottom:"100px"}}>
        <div style={{padding:"20px",backgroundColor:"lightgoldenrodyellow"}}>
        <Typography component="h1" variant="h4">Games</Typography><br/>
        <TableContainer component={Paper}> 
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Single Player</TableCell>
                <TableCell>Multi Player</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell>Release</TableCell>
                <TableCell>Edit</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell><Button onClick={handleSort} value={"gname"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"ggenre"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"gsingle"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"gmulti"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"gplatform"}>sort</Button></TableCell>
                <TableCell><Button onClick={handleSort} value={"grelease"}>sort</Button></TableCell>
                <TableCell></TableCell>
            </TableRow>
        {
            game!==null&&game.map((el)=>{
                return(
                    <TableRow>
                        <TableCell>{el.name}</TableCell>
                        <TableCell>{el.genre}</TableCell>
                        <TableCell>{el.singlePlayer}</TableCell>
                        <TableCell>{el.multiplayer}</TableCell>
                        <TableCell>{el.platform}</TableCell>
                        <TableCell>{el.release}</TableCell>
                        <TableCell><button onClick={handleEdit2} value={el.id}>Edit</button></TableCell>
                    </TableRow>
                )
            })
        }
        </TableBody>
        </Table></TableContainer>
        <br/>
        <Typography component="h2" variant="subtitle1">
        <Link to="/game/create" style={{float:"right",backgroundColor:"black",color:"white"}}>CREATE</Link>
        </Typography>
        <form onSubmit={handleSearch2}><br/>
        <Typography component="h2" variant="subtitle1">
            <label>Name Game : </label>
            <TextField type="text" value={searchGame} onChange={handleChange2}/>
            <button>Search</button>
        </Typography>
        </form>
        {searchGame!==null&&findG!==null &&
        <Typography component="h2" variant="body2"><br/>
            <p>
                Name: {findG.name}<br/>
                Genre : {findG.genre}<br/>
                Singleplayer : {findG.singlePlayer}<br/>
                Multiplayer : {findG.multiplayer}<br/>
                Platform : {findG.platform}<br/>
                Release : {findG.release}<br/>
            </p>
        </Typography>
        }
        <form onSubmit={handleFilter3} style={{float:"left"}}><br/>
        <Typography component="h2" variant="subtitle1">
            <label>Release Game : </label>
            <TextField type="text" value={inputFilter3} onChange={handleChangeFilter3}/>
            <button>Filter</button>
        </Typography>
        </form>
        <form onSubmit={handleFilter4} style={{float:"right"}}><br/>
        <Typography component="h2" variant="subtitle1">
        <label>Genre Game : </label>
            <TextField type="text" value={inputFilter4} onChange={handleChangeFilter4}/>
            <button>Filter</button>
        </Typography>
        </form><br/><br/>
        {filter2!==null && filter2.map((filter2)=>{
            return(
                <Typography component="h2" variant="body2"><br/>
                <p>Name: {filter2.name} | Genre : {filter2.genre} | Singleplayer : {filter2.singlePlayer} | Multiplayer : {filter2.multiplayer} | Platform : {filter2.platform} | Release : {filter2.release}</p>
                </Typography>
            )
        })
        }
        </div></div>
        </>
    )
}
export default TablePage;