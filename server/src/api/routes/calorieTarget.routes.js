import { Router } from "express";
import cors from 'cors';
import passport from "passport";
import controllers from "../controllers";
const route = Router();
const corsOption = {
    corsCalorieTarget:{
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['GET'],
        allowedHeaders: ['Content-Type']
    },
    corsDeleteCalorieTarget:{
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['DELETE'],
        allowedHeaders: ['Content-Type']
    },
}
const {getCalorieTargetUserController,deleteCalorieTargetUserController}= controllers.caloriesTarget
route.options('/', cors(corsOption.corsCalorieTarget));
route.options('/delete/:id', cors(corsOption.corsDeleteCalorieTarget));
route.get('/', cors(corsOption.corsCalorieTarget), passport.authenticate('jwt', { session: false }),getCalorieTargetUserController);
route.delete('/delete/:id',cors(corsOption.corsDeleteCalorieTarget),deleteCalorieTargetUserController)
export default route;