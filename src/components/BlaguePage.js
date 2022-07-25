import {useLocation} from 'react-router-dom'
import { useState } from 'react'

import './style.css'
function BlaguePage(){
    const [likes, setLikes] =useState(0)
    const location = useLocation()

     
    return (
        <div className='padding pad-top'>
            <div>
                Blague n° {location.state.index+1}
            </div>
            <div>
                {location.state.blague}
            </div>
            <div>
                {location.state.reponse}
            </div>
            <br/>
            <button onClick={()=>{setLikes(likes+1)}}>
                J'aime
            </button>
            <button onClick={()=>{setLikes(likes-1)}}>
                J'aime pas
            </button>
            <br/>
            <br/>
            <div>
                popularité : {likes}
            </div>
        </div>
    )
}

export default BlaguePage