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

    socket.on('move_car_1',(position,bandera)=>{

        io.emit("yes_move_car_1",position,bandera)

    })

    socket.on('move_car_2',(position,bandera)=>{

        io.emit("yes_move_car_2",position,bandera)

    })

   /* socket.on ('move_up_car_1', position =>{
        io.emit("car_1_move_up",position);
    })
    
    socket.on ('move_down_car_1', position =>{
        io.emit("car_1_move_down",position);
    })
    
    socket.on ('move_left_car_1', position =>{
        io.emit("car_1_move_left",position);
    })

    
    socket.on ('move_right_car_1', position =>{
        io.emit("car_1_move_right",position);
    })

    socket.on ('move_up_car_2', position =>{
        io.emit("car_2_move_up",position);
    })
    
    socket.on ('move_down_car_2', position =>{
        io.emit("car_2_move_down",position);
    })
    
    socket.on ('move_left_car_2', position =>{
        io.emit("car_2_move_left",position);
    })

    
    socket.on ('move_right_car_2', position =>{
        io.emit("car_2_move_right",position);
    })
    */
});

server.listen(4000,() => console.log("Servidor inicializado"));
