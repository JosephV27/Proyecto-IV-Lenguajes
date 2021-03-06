import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vs from '../images/vs.jpeg';
import './styles/CreateGame.css'
import { Link } from 'react-router-dom';


class CreateGame extends Component {

    // Estados iniciales de la clase CreateGame
    state = {
        laps: "",
        track: ""
    }

    /*
    Entradas: Recibe un evento
    Salidas: Devuelve el estado de las vueltas actualizado
    Funcionalidad: Actualiza el estado de las vueltas, cada vez que ocurra el evento
    */
    handleLapsChange = (event) => {
        this.setState({
            laps: event.target.value
        })
    }

    /*
    Entradas: Recibe un evento
    Salidas: Devuelve el estado de la pista actualizado
    Funcionalidad: Actualiza el estado de la pista, cada vez que ocurra el evento
    */
    handleTrackChange = (event) => {
        this.setState({
            track: event.target.value
        })
    }

    /*
    Entradas: No tiene
    Salidas: html de la página para crear el juego
    Funcionalidad: Renderiza el html que verá el usuario en la página para crear partida
    */

    render() {
        return (
            <body className="create_game">
                <div>
                    <h4 className="game-mode-title">Seleccione el tipo de juego: </h4>
                    <figure className="figure">
                        <input type="image" src={vs} alt="choose the game mode" height="270" onClick={() => alert("Seleccionó el modo de juego versus")} />
                        <figcaption>Vs: Correrán durante el tiempo que deseen hasta que todos terminen</figcaption>
                    </figure>
                </div>
                <h4 className="game-configuration-title">Configuraciones de Partida</h4>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="form-group">

                                    <label>
                                        Cantidad de Vueltas:
					                </label>
                                    <input type="text" className="form-control" id="NumberofLaps" value={this.state.laps} onChange={this.handleLapsChange} />
                                </div>

                                <div className="form-group">

                                    <label>
                                        Seleccione la pista:
					                </label>
                                    <select value={this.state.track} onChange={this.handleTrackChange}>
                                        <option value="mode">dificultad: </option>
                                        <option value="easy">Fácil</option>
                                        <option value="medium">Medio</option>
                                        <option value="hard">Difícil</option>
                                    </select>
                                </div>
                                <Link className="btn btn-primary btn-lg" role="button" to={{
                                    pathname: "/juego",
                                    state: {
                                        laps: this.state.laps,
                                        track: this.state.track
                                    }
                                }}>Crear Partida</Link>
                            </form>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </body>

        );
    }
}

export default CreateGame;
