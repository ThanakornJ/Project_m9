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
const { showExerciseController, createExerciseController, deleteExerciseController } = controllers.exercise;

route.options('/', cors(corsOption.corsExercise));
route.options('/create', cors(corsOption.corsAddExercise));
route.get('/', cors(corsOption.corsExercise), showExerciseController);
route.post('/create', cors(corsOption.corsAddExercise), passport.authenticate('jwt', { session: false }), createExerciseController);
route.delete('/delete', cors(corsOption.corsDeleteExercise), passport.authenticate('jwt', { session: false }), deleteExerciseController);


export default route;