import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import CreateGame from './components/CreateGame';
import Game from './components/Game';

function App() {
  return (
	// <Router>
	// 	<Navigation/>
	// 	<Route path="/" exact component={MainPage} />
	// 	<Route path="/crear-partida" component={CreateGame} />
	// 	<Route path="/juego" component={Game} />
	// </Router>
	<Game/>
  );
}

export default App;
