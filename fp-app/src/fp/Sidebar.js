import React from "react"
import { Typography } from "@material-ui/core";
function Sidebar(){
    return(
        <><div class="sidenav"> 
        <div style={{textAlign:"center",marginTop:"30px",padding:"10px",color:"darkblue"}}>
        <Typography component="h1" variant="h5">Welcome</Typography><br/>
        <Typography component="h1" variant="body2">
            This website is made for Final Project of Sanbercode Reactjs FrontEnd Developer Class.
            Enjoy to get list of movies and games!
        </Typography><br/>
        <div style={{backgroundColor:"pink"}}><br/>
        <Typography component="h1" variant="subtitle1">About Me<br/></Typography>
        <Typography component="h1" variant="caption">Nama:<br/>Evelyn Tjitrodjojo <br/><br/></Typography>
        <Typography component="h1" variant="caption" >Email:<br/>Marsella.eve@gmail.com<br/><br/></Typography>
        <Typography component="h1" variant="caption" >Sistem Operasi yang digunakan:<br/>Windows<br/><br/></Typography>
        <Typography component="h1" variant="caption" >Akun Gitlab:<br/>github.com/Marsellaeve<br/><br/></Typography>
        <Typography component="h1" variant="caption" >Akun Telegram:<br/>Marsellaeve<br/><br/></Typography>
        </div>
        </div>
        </div>
        </>
    )
}
export default Sidebar