import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import CreateGame from './components/CreateGame';
import Game from './components/Game';


class App extends Component {

	/*
    Entradas: No tiene
    Salidas: Retorna el html con el menú principal
    Funcionalidad: Junta las distintas páginas del menú principal en una sola
	*/
	render() {
		return (
			<Router>
				<Navigation />
				<Route path="/" exact component={MainPage} />
				<Route path="/crear-partida" component={CreateGame} />
				<Route path="/juego" component={Game} />
			</Router>

		)
	};
}

export default App;
