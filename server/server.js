import 'dotenv/config';
import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import cors from 'cors';
import path from 'path';
import { trackTicker } from './utils';

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

io.set('origins', '*:*');

io.sockets.on('connection', (socket) => {
    socket.on('ticker', (ticker) => {
        trackTicker(socket, ticker, process.env.FETCH_INTERVAL);
    });
});

app.use(cors());

app.get('/ticker', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

if (process.env.NODE_ENV === 'production') {
    const clientStaticFiles = express.static(path.join(__dirname, '../../client/build'))
    app.use(clientStaticFiles);
    app.use('/*', clientStaticFiles);
}

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.set('port', process.env.PORT || 3001);

server.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`);
});  