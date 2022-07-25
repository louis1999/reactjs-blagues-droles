import Title from "../Title"
import AddBlague from '../AddBlague'
import Blague from "../Blague"
import '../style.css'
import { useState } from "react"


const init_blagues = [
    {
        blague : "Qu'est-ce qui est jaune et qui attend ?",
        reponse : "jonathan"
    },
    {
        blague : "Qu'est-ce qui est grand vert et qui fait mal quand on se le prend dans l'oeil ?",
        reponse :"un terrain de foot"
    },
    {
        blague: "titre",
        reponse: "rep"
    }
    
    

]

function HomePage(){
    const [blagues, setBlages] = useState(init_blagues)


    function updateState(blague){
        setBlages(oldblagues => [...oldblagues, blague])
    }
   

    return (
        <div>
            <Title/>

            <AddBlague updateState={updateState}/>

            <div className="pad-top">
                {blagues.map((element, index)=>{
                    return(
                        <Blague index={index} blague={blagues[index].blague} reponse={blagues[index].reponse}/>
                    )
                })}
            </div>

            
            
        </div>
    )


}

export default HomePage