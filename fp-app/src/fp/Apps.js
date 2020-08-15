import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Switch,Route} from "react-router-dom"
import Menubar from "./Menubar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import MoviesPage from "./MoviesPage"
import GamePage from "./GamesPage"
import TablePage from "./TablePage"
import LoginPage from "./LoginPage"
import CreateMovies from "./CreateMovies"
import CreateGames from "./CreateGames"
import ListGame from "./ListGame"
import EditGames from "./EditGames"
import EditMovies from "./EditMovies"
class Apps extends React.Component {
    render(){
        return(
            <>
            <Router>
                <Menubar/>
                <Sidebar/>
                <Switch>
                    <Route path="/movie/create" component={CreateMovies}/>
                    <Route path="/game/create" component={CreateGames}/>
                    <Route path="/movie/edit" component={EditMovies}/>
                    <Route path="/game/edit" component={EditGames}/>
                    <Route path="/movie" component={MoviesPage}/>
                    <Route path="/table" component={TablePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/game" component={GamePage}/>
                    <Route path="/" component={ListGame}/>
                </Switch>
                <Footer/>
            </Router>
            </>
        )
    }
}
export default Apps