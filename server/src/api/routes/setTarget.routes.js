import { Router } from 'express';
import cors from 'cors';
import passport from 'passport';
import controllers from '../controllers';


const route = Router();
const corsOption = {
    corsTargetAccount: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsCreateTarget: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsDeleteTarget: {

    }
}
const { getTargetAccountController, createSetTargetController, deleteTargetController } = controllers.target;

route.options('/show', cors(corsOption.corsTargetAccount));
route.options('/create', cors(corsOption.corsCreateTarget));
route.options('/delete/:id', cors(corsOption.corsDeleteTarget));

route.get('/show', cors(corsOption.corsTargetAccount), passport.authenticate('jwt', { session: false }), getTargetAccountController);
route.post('/create', cors(corsOption.corsCreateTarget), passport.authenticate('jwt', { session: false }), createSetTargetController);
route.delete('/delete/:id', cors(corsOption.corsDeleteTarget), passport.authenticate('jwt', { session: false }), deleteTargetController);

export default route;