import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vs from '../images/vs.jpeg';
import './styles/CreateGame.css'
import { Link } from 'react-router-dom';

class CreateGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            laps: "",
            players: "",
            track: ""

        }
    }

    handleLapsChange = (event) => {
        this.setState({
            laps: event.target.value
        })
    }

    handlePlayersChange = (event) => {
        this.setState({
            players: event.target.value
        })
    }

    handleTrackChange = (event) => {
        this.setState({
            track: event.target.value
        })
    }

    handleSubmit = (event) => {
        // alert(`${this.state.laps} ${this.state.players} ${this.state.track}`);
        event.preventDefault();
        return (
            <h1>Hola Mundo</h1>
        );
    }

    render() {
        return (
            <body className="create_game">
                <div>
                    <h4 className="game-mode-title">Seleccione el tipo de juego: </h4>
                    <figure className="figure">
                        <input type="image" src={vs} alt="choose the game mode" height="270" onClick={() => alert("Seleccionó el modo de juego versus")} />
                        <figcaption className="figure-caption text-right">Vs: Correrán durante el tiempo que deseen hasta que todos terminen</figcaption>
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
                                        Cantidad de Jugadores:
					                </label>
                                    <input type="text" className="form-control" id="NumberofPlayers" value={this.state.players} onChange={this.handlePlayersChange} />
                                </div>
                                <div className="form-group">

                                    <label>
                                        Seleccione la pista:
					                </label>
                                    <select value={this.state.track} onChange={this.handleTrackChange}>
                                        <option value="ciudad">Ciudad</option>
                                        <option value="desierto">Desierto</option>
                                        <option value="pueblo">Pueblo</option>
                                    </select>
                                </div>
                                <Link className="btn btn-primary btn-lg" role="button" to="/juego">Crear Partida</Link>
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
