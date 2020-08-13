import React,{useContext} from "react"
import {Link,Switch,Route} from "react-router-dom"
import {UserContext} from "./UserContext"
import Style from './style.css';
import MoviesPage from "./MoviesPage"
import GamePage from "./GamesPage"
// import LoginPage from "./LoginPage"
import logo from "./logo.png"

const Menubar=()=>{
    const [user,] = useContext(UserContext);
    // const handleLogout=()=>{
    //     setUser(null);
    //     localStorage.removeItem("user")
    // }
    return(
        <><link href={Style} rel="stylesheet" />  
            <header>
                <img id="logo" src={logo} width="200px" alt="logo" />
                <nav>
                    <ul>
                        <li><Link to="/game">Games</Link></li>
                        <li><Link to="/movie">Movies</Link></li>
                        {
                            user&&(<li><Link to="/edit">Editor</Link></li>)
                        }
                        {/* {
                            user===null&&(<li><Link to="/login">Login</Link></li>)
                        } */}
                        {/* {
                            user&&(<li><a onClick={handleLogout}>Logout</a></li>)
                        } */}
                    </ul>
                </nav>
            </header>
            {user&&<h1 style={{marginLeft:"50px"}}>Welcome, {user.username}</h1>}
            <Switch>
                <Route path="/game" component={GamePage}/>
                <Route path="/movie" component={MoviesPage}/>
                <Route path="/edit"/>
                <Route path="/"/>
                {/* <Route path="/login" component={LoginPage}/> */}
            </Switch>
        </>
    )
}
export default Menubar