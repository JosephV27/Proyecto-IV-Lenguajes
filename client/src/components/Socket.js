import io from 'socket.io-client';

// Conexión del servidor con el cliente
let socket = io ("http://frumbox.ddns.net:4000");

export default socket;