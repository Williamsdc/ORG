import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
// Estado - Hooks
// useState
// useState()
// const [nombre de variable, Actualizacion de la variable] = useState(¨lo que queremos¨)

    return <section className="orgSection">
        <h3 className="title"> Mi organizacion</h3>
        <img src='/img/add.png' alt="add" onClick={props.cambiarMostrar}></img> 
    </section>
}

export default MiOrg 