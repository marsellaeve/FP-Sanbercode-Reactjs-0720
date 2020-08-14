import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import Menubar from "./Menubar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
class Apps extends React.Component {
    render(){
        return(
            <>
            <Router>
                <Menubar/>
                <Sidebar/>
                <Footer/>
            </Router>
            </>
        )
    }
}
export default Apps