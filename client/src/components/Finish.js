import React, { Component } from 'react'
import finish_line from '../images/finish-line.svg'

export default class Finish extends Component {

    /*
    Entradas: No tiene
    Salidas: Retorna una imagen en html de la meta
    Funcionalidad: Renderiza en pantalla los objetos tipo Finish
    */
    render() {
        return (
            <img src={finish_line} className={"finish"} />

        )
    }
}