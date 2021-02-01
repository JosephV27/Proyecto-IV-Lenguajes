import React, {Component} from 'react'
import barrier from '../images/barrier.jpg'


export default class Obstacle extends Component{

    /*
    Entradas: No tiene 
    Salidas: html de una imagen
    Funcionalidad: Renderiza la imagen del obstaculo que el usuario verá en la pista
    */
    render(){
        return(
            <img className={"obstacle"} src={barrier} alt="barrier for cars"/>
        )
    }
}