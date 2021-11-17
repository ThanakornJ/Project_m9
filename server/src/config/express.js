import express, { json, urlencoded } from 'express';
import http from 'http';
import helmet from 'helmet';
import passport from './passport';
import socket from './socket';
import db from './database';
import routes from '../api/routes';

const app = express();
const server = http.createServer(app);

export default function start() {
    app.use(json());
    app.use(urlencoded({ extended: false }));
    app.use(helmet());
    db.sequelize.sync();
    passport();
    socket(server);

    app.use('/api', routes);

    const listen = (port) => {
        server.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    }

    return { listen };
}