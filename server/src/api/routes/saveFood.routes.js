import { Router } from 'express';
import passport from 'passport';
import cors from 'cors';
import controllers from '../controllers';

const route = Router();
const corsOption = {
    corsSaveFood: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['GET'],
        allowedHeaders: ['Content-Type']
    },
    corsCreateFood: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsDeleteSaveFood: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
}
const { getSaveFoodController, createSaveFoodController, deleteSaveFoodController } = controllers.saveFood;

route.options('/show', cors(corsOption.corsSaveFood));
route.options('/create', cors(corsOption.corsCreateFood));
route.options('delete/:id', cors(corsOption.corsDeleteSaveFood));

route.get('/show', cors(corsOption.corsSaveFood), passport.authenticate('jwt', { session: false }), getSaveFoodController);
route.post('/create', cors(corsOption.corsCreateFood), passport.authenticate('jwt', { session: false }), createSaveFoodController);
route.delete('/delete/:id', cors(corsOption.corsDeleteSaveFood), passport.authenticate('jwt', { session: false }), deleteSaveFoodController);

export default route;