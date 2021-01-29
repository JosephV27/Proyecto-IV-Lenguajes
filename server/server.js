const express = require('express');
const http = require ('http');
const app = express();

const server = http.createServer(app);


const socketio = require ('socket.io');
const io = socketio(server);

io.on('connection', socket => {

    socket.on('conectado', ()=>{

        console.log("Usuario conectado");
    })
    socket.on ('move_up', (number) =>{
        console.log("MOVER ARRIBA CARRO 1")
        io.emit("number", {number});

    })


});

server.listen(4000,() => console.log("Servidor inicializado"));
