import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import Menubar from "./Menubar"
import Sidebar from "./Sidebar"
// import GamesPage from "./GamesPage"

const Apps=()=>{
    return(
        <>
        <Router>
            <Menubar/>
            {/* <GamesPage/> */}
            <Sidebar/>
        </Router>
        </>
    )
}
export default Apps