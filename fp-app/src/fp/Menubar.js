import React,{useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import {UserContext} from "./UserContext"
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
                <img className="logo" id="logo" src={logo} width="200px" alt="logo" height="10px"/>
                <nav>
                    <ul>
                        <Typography>   
                        {
                            user==="belum"&&<>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li></>
                        }
                        {
                            user==="sudah"&&<>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/game">Games</Link></li>
                            <li><Link to="/movie">Movies</Link></li>
                            <li><Link to="/table">Table</Link></li>
                            <li><a onClick={handleLogout}>Logout</a></li></>
                        }
                        </Typography>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Menubar