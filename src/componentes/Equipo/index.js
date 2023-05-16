import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) =>{

/*  Concepto de Destructuracion: Es crear una constante dentro de {}
 de la cual puedo extraer informacion asignandolo luego del ¨=¨ el lugar de donde lo quiero sacar
 esto con el afan de reducir lineas de codigo */

    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {backgroundColor: hexToRgba(colorPrimario, 0.6)}

    const estilotitulo= {borderColor: colorPrimario}


    return <> 
    { colaboradores.length > 0 && 
                <section className='equipo' style={obj}>
                    <input
                        type='color'
                        className='input-color'
                        value={hexToRgba(colorPrimario, 0.6)}
                        onChange={(evento)=>{
                            actualizarColor(evento.target.value, id)
                        }}
                    />

                <h3 style={estilotitulo}>{props.datos.titulo}</h3>

                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador} 
                        key = {colaborador.index}
                        colorPrimario={colorPrimario} 
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
    }</>
} 

export default Equipo