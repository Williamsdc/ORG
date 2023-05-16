import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto= (props) =>{

     const [valor, actualizarValor] = useState("")

    const manejarCambio = (evento) =>{
        props.actualizarValor(evento.target.value)
        
    }

    return <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input placeholder={ props.placeholder } required = {props.required} value={props.valor} onChange={manejarCambio}></input>
          </div>
}


export default CampoTexto