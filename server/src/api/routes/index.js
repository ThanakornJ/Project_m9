import { Router } from "express";
import accountRoute from './account.routes';
import userRoute from './user.routes';
import foodRoute from './food.routes';
import exerciseRoute from './exercise.routes';
import setTargetRoute from './setTarget.routes';
import commentRoute from './comment.routes';
import calorieTarget from './calorieTarget.routes'
import saveExercise from './saveExercise.routes'

const routes = Router();

routes.use('/auth', accountRoute);
routes.use('/users', userRoute);
routes.use('/foods', foodRoute);
routes.use('/exercise', exerciseRoute);
routes.use('/target', setTargetRoute);
routes.use('/comment', commentRoute);
routes.use('/showtarget',calorieTarget)
routes.use('/save',saveExercise)


export default routes;