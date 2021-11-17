import { Server } from 'socket.io';

export default function socket(server) {
    const io = new Server(server, {
        cors: {
            origin: process.env.ORIGIN || 'http://localhost:3000'
        }
    });

    io.sockets.on('connection', (socket) => {
        
    });
}