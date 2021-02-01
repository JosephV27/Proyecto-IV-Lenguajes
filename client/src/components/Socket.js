import io from 'socket.io-client';

let socket = io ("http://frumbox.ddns.net:4000");

export default socket;