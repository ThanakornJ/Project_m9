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
const {createSaveExerciseController,getSaveExerciseController } = controllers.saveExercise;
route.options('/', cors(corsOption.corsExercise));
route.options('/create', cors(corsOption.corsAddExercise));
route.get('/', cors(corsOption.corsExercise), getSaveExerciseController);
route.post('/create', cors(corsOption.corsAddExercise),createSaveExerciseController);
// route.delete('/delete', cors(corsOption.corsDeleteExercise), passport.authenticate('jwt', { session: false }), deleteExerciseController);


export default route;