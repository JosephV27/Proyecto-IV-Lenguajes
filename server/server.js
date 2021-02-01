//Configuración del servidor
const express = require('express');
const http = require ('http');
const app = express();
const server = http.createServer(app);
const socketio = require ('socket.io');
const io = socketio(server);

/*
Entradas: Una señal y socket
Salidas: Emitir señales
Funcionalidad: Emite señales para poder comunicar el cliente con el servidor,
realizando así una conexion entre todos los demás usuarios.
*/
io.on('connection', socket => {

    /*
    Entradas: Señal, Dos enteros
    Salidas: Emitir una señal
    Funcionalidad: Emite señales de movimiento del carro 1
    */
    socket.on('move_car_1',(position,flag)=>{

        io.emit("yes_move_car_1",position,flag)

    })

    /*
    Entradas: Señal, Dos enteros
    Salidas: Emitir una señal
    Funcionalidad: Emite señales de movimiento del carro 2
    */
    socket.on('move_car_2',(position,flag)=>{

        io.emit("yes_move_car_2",position,flag)

    })

    /*
    Entradas: Señal, Dos enteros
    Salidas: Emitir una señal
    Funcionalidad: Emite señales del ganador de la carrera
    */
    socket.on('winner',(laps_c1,laps_c2)=>{

        io.emit("verify_winner",laps_c1,laps_c2)

    })
});

server.listen(4000,() => console.log("Servidor inicializado"));
