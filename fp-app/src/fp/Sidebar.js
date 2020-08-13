import React from "react"
import Style from './style.css';
const Sidebar=()=>{
    return(
        <><div class="sidenav"><link href={Style} rel="stylesheet" />  
        <div style={{textAlign:"center",marginTop:"100px",padding:"10px"}}>
        <h1>Welcome</h1>
        <p>
            This website is made for Final Project of Sanbercode Reactjs FrontEnd Developer Class.
            Enjoy to get list of movies and games!
        </p>
        <div style={{backgroundColor:"pink"}}>
        <h3 style={{color:"black", paddingTop:"20px"}}>About Me</h3>
        <strong style={{width: '100px'}}>Nama:</strong><br/>Evelyn Tjitrodjojo <br/><br/>
        <strong style={{width: '100px'}}>Email:</strong><br/>Marsella.eve@gmail.com<br/><br/>
        <strong style={{width: '100px'}}>Sistem Operasi yang digunakan:</strong><br/>Windows<br/><br/>
        <strong style={{width: '100px'}}>Akun Gitlab:</strong><br/>github.com/Marsellaeve<br/><br/>
        <strong style={{width: '100px'}}>Akun Telegram:</strong><br/>Marsellaeve<br/><br/>
        </div>
        </div>
        </div>
        </>
    )
}
export default Sidebar