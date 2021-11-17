import { Router } from 'express';
import cors from 'cors';
import passport from 'passport';
import controllers from '../controllers';

const route = Router();
const corsOption = {
    corsFoodIngredient: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['GET'],
        allowedHeaders: ['Content-Type']
    },
    corsCreateFood: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['POST'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsUpdateFood: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['PUT', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    },
    corsDeleteFood: {
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods: ['DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
}
const { getAllFoodController, getFoodsAndIngredientsController, createFoodController, updateFoodController, deleteFoodController } = controllers.food;

route.options('/', cors(corsOption.corsFoodIngredient));
route.options('/food-ingredients', cors(corsOption.corsFoodIngredient));
route.options('/create', cors(corsOption.corsCreateFood));
route.options('/update/:column', cors(corsOption.corsUpdateFood));
route.options('/delete', cors(corsOption.corsDeleteFood));

route.get('/', cors(corsOption.corsFoodIngredient), getAllFoodController);
route.get('/food-ingredients', cors(corsOption.corsFoodIngredient), getFoodsAndIngredientsController);
route.post('/create', cors(corsOption.corsCreateFood), passport.authenticate('jwt', { session: false }), createFoodController);
route.patch('/update/:column', cors(corsOption.corsUpdateFood), passport.authenticate('jwt', { session: false }), updateFoodController);
route.delete('/delete', cors(corsOption.corsDeleteFood), passport.authenticate('jwt', { session: false }), deleteFoodController);

export default route;