// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const Editor=()=>{
//     const[game,setGame]=useState(null)
//     const[name,setname]=useState("")
//     const[genre,setGenre]=useState("")
//     const[single,setSingle]=useState("")
//     const[multi,setMulti]=useState("")
//     const[platform,setPlatform]=useState("")
//     const[release,setRelease]=useState("")
//     useEffect(()=>{
//         if(game===null){
//             axios.get('https://backendexample.sanbersy.com/api/games')
//             .then(res=>{
//                 setGame(res.data.map((item)=>{
//                     return{
//                         id:item.id,
//                         name:item.name,
//                         genre:item.genre,
//                         singlePlayer:item.singlePlayer,
//                         multiplayer:item.multiplayer,
//                         platform:item.platform,
//                         release:item.release,
//                         image_url:item.image_url
//                     }
//                 }))
//             })
//         }
//     },[game])
//     const
// }
// export default EditComponent;