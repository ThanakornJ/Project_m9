import { Router } from 'express';
import passport from 'passport';
import cors from 'cors';
import controllers from '../controllers';

const route = Router();
const corsOption = {
    corsExercise: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['GET'],
        allowedHeaders: ['Content-Type']
    },
    corsAddExercise: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsDeleteExercise: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
}
const {createSaveExerciseController,getSaveExerciseController, deleteSaveExerciseController } = controllers.saveExercise;
route.options('/', cors(corsOption.corsExercise));
route.options('/create', cors(corsOption.corsAddExercise));
route.options('/delete/:id', cors(corsOption.corsDeleteExercise));

route.get('/show', cors(corsOption.corsExercise), passport.authenticate('jwt', { session: false }), getSaveExerciseController);
route.post('/create', cors(corsOption.corsAddExercise), passport.authenticate('jwt', { session: false }), createSaveExerciseController);
route.delete('/delete/:id', cors(corsOption.corsDeleteExercise), passport.authenticate('jwt', { session: false }), deleteSaveExerciseController);

export default route;