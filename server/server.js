const express = require('express');
const http = require ('http');
const app = express();

const server = http.createServer(app);


const socketio = require ('socket.io');
const io = socketio(server);

io.on('connection', socket => {

    socket.on('move_car_1',(position,flag)=>{

        io.emit("yes_move_car_1",position,flag)

    })

    socket.on('move_car_2',(position,flag)=>{

        io.emit("yes_move_car_2",position,flag)

    })
});

server.listen(4000,() => console.log("Servidor inicializado"));
