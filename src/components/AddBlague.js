
import { useState } from 'react'
import './style.css'

function AddBlague(props){
    const [blague, setBlague] = useState("")
    const [reponse, setReponse] = useState("")

    function handleChange(event){
        if(event.target.name=="blague"){
            setBlague(event.target.value)
        }
        else if (event.target.name=="reponse"){
            setReponse(event.target.value)
        }
        else{ 
            // do nothing
        }
    }

    function handleCreate(){
        props.updateState({blague:blague, reponse:reponse})
        setBlague("")
        setReponse("")
    }

    return (
        <div className='padding pad-top'>

            <div>
                <label>La blague : </label>
                <input value={blague} name="blague" onChange={handleChange}>
                </input>
            </div>
            <div>
                <label>La réponse : </label>
                <input value={reponse} name="reponse" onChange={handleChange}>
                </input>
            </div>
            <button onClick={handleCreate}>
                créer
            </button>
        </div>
    )
}

export default AddBlague