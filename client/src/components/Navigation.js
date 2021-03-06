import React from 'react';
import './styles/Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

/*
    Entradas: No tiene
    Salidas: Retorna el html con la barra de navegación
    Funcionalidad: Crea la barra de navegación del menú principal, mediante la cual el usuario podrá seleccionar las distintas opciones
*/
function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" >
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/crear-partida">Crear Partida<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/unirse-a-juego">Unirse a Juego<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/ver-ranking">Ver Ranking<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
