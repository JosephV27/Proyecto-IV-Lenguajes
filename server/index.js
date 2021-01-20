const express = require('express');
const app = express();

// Settings 
app.set('port', process.env.PORT || 9000);

// Middlewares - Funciones que se ejecutan antes de que lleguen a las rutas
// app.use(morgan('dev'));
app.use(express.json());

// Routes  
// app.use('/api/juego', require('./server/routes/routes'));
app.get('/crear-partida', (req, res) => {
    res.send('Hello World');
});

// Static Files
// app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});