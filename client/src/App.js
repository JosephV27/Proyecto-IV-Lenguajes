import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3 class="text-center">
				Bienvenido a Luiki Kart!!!
			</h3>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4">
			 
			<button type="button" class="btn btn-primary btn-lg btn-block">
				CREAR PARTIDA
			</button>
		</div>
		<div class="col-md-4">
			 
			<button type="button" class="btn btn-primary btn-lg btn-block">
				UNIRSE A JUEGO
			</button>
		</div>
		<div class="col-md-4">
			 
			<button type="button" class="btn btn-lg btn-block btn-primary">
				VER RANKING
			</button>
		</div>
	</div>
  
</div>
  );
}

export default App;
