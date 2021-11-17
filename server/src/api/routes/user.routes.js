import { Router } from 'express';
import passport from 'passport';
import cors from 'cors';
import controllers from '../controllers';

const route = Router();
const corsOption = {
    corsLogin: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['GET'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsCreateAccount: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type']
    },
    corsUpdateAccount: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['PUT, PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsDeleteAccount: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
}
const { getAllUserController } = controllers.account;

route.options('/show', cors(corsOption.corsLogin));

route.get('/show', cors(corsOption.corsLogin), passport.authenticate('jwt', { session: false }), getAllUserController);

export default route;