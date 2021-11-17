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
const { loginBasicController, loginJWTController, createAccountController, updateAccountController, deleteAccountController } = controllers.account;

route.options('/login', cors(corsOption.corsLogin));
route.options('/account', cors(corsOption.corsLogin));
route.options('/register', cors(corsOption.corsCreateAccount));
route.options('/update/:column', cors(corsOption.corsUpdateAccount));
route.options('/delete', cors(corsOption.corsDeleteAccount));
route.get('/login', cors(corsOption.corsLogin), passport.authenticate('basic', { session: false }), loginBasicController);
route.get('/account', cors(corsOption.corsLogin), passport.authenticate('jwt', { session: false }), loginJWTController);
route.post('/register', cors(corsOption.corsCreateAccount), createAccountController);
route.patch('/update/:column', cors(corsOption.corsUpdateAccount), passport.authenticate('jwt', { session: false }), updateAccountController);
route.delete('/delete', cors(corsOption.corsDeleteAccount), passport.authenticate('jwt', { session: false }), deleteAccountController);

export default route;