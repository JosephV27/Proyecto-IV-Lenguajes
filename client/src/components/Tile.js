import React, { Component } from 'react'

export default class Tile extends Component {

    /*
    Entradas: No tiene
    Salidas: Retorna el número de una casilla
    Funcionalidad: Función que retorna el número de una casilla en el grid donde se mueven los carros
    */
    render() {
        return (
            <div className={"tile"}>
                {this.props.number}
            </div>
        )
    }
}

