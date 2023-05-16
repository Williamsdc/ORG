
import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{


    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto]     = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const[titulo,actualizarTitulo]  =useState("")
    const[color,actualizarColor]  =useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio= (evento) =>{
        evento.preventDefault()
// Aca creo un objeto para poder capturar esos datos y si uno quiere enviarlos a un backEnd
        
        let datosEnviar= {
            nombre,
            puesto,
            foto,
            equipo
        }
       registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})

    }


    return <section className="formulario">
                <form onSubmit={manejarEnvio}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto titulo = "Nombre" placeholder="Ingrese Nombre" required        valor={nombre} actualizarValor={actualizarNombre}/>
                    <CampoTexto titulo = "Puesto" placeholder="Ingrese Puesto" required        valor={puesto} actualizarValor={actualizarPuesto}/>
                    <CampoTexto titulo = "Foto" placeholder="Ingresar enlace de Foto" required valor={foto}   actualizarValor={actualizarFoto}/>
                    <ListaOpciones valor= {equipo} actualizarEquipo={actualizarEquipo} equipos= {props.equipos}/>
                    <Boton texto="Crear"/>
                </form>
                <form onSubmit={manejarNuevoEquipo}>
                    <h2>Rellena el formulario para crear el Equipo.</h2>
                    <CampoTexto titulo = "Titulo" placeholder="Ingrese Titulo" required        valor={titulo} actualizarValor={actualizarTitulo}/>
                    <CampoTexto titulo = "Color" placeholder="Ingrese el Color en Hexadecimal" required        valor={color} actualizarValor={actualizarColor}/>
                    <Boton>Registrar Equipo</Boton>
                </form>
            </section>
}

export default Formulario