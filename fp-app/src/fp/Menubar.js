import React,{useContext} from "react"
import {Link,Switch,Route,useHistory} from "react-router-dom"
import {UserContext} from "./UserContext"
import MoviesPage from "./MoviesPage"
import GamePage from "./GamesPage"
import TablePage from "./TablePage"
import LoginPage from "./LoginPage"
import logo from "./logo.png"
import { Typography } from "@material-ui/core";

const Menubar=()=>{
    const [user,setUser] = useContext(UserContext);
    const history=useHistory()
    const handleLogout=()=>{
        setUser("belum");
        history.push("/");
    }
    return(
        <>
            <header>
                <img className="logo" id="logo" src={logo} width="200px" alt="logo" height="10px" />
                <nav>
                    <ul>
                        <Typography>
                        <li><Link to="/game">Games</Link></li>
                        <li><Link to="/movie">Movies</Link></li>
                        <li><Link to="/table">Table</Link></li>
                        {/* <li><Link to="/login">Login</Link></li> */}
                        {
                            user==="sudah"&&(<li><Link to="/edit">Editor</Link></li>)
                        }
                        {
                            user==="belum"&&(<li><Link to="/login">Login</Link></li>)
                        }
                        {
                            user==="sudah"&&(<li><a onClick={handleLogout}>Logout</a></li>)
                        }
                        </Typography>
                        
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path="/game" component={GamePage}/>
                <Route path="/movie" component={MoviesPage}/>
                <Route path="/table" component={TablePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/edit"/>
                <Route path="/"/>
                </Switch>
        </>
    )
}
export default Menubar