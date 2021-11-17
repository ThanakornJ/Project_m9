import { getAllUserController, loginBasicController, loginJWTController, createAccountController, updateAccountController, deleteAccountController } from './account.controller';
import { getAllFoodController, getFoodsAndIngredientsController, createFoodController, updateFoodController, deleteFoodController } from './food.controller';
import { showExerciseController, createExerciseController, deleteExerciseController } from './exercise.controller';
import { getCommentController, crateCommentController, createCommentReplyController, updateCommentController, deleteCommentController } from './comment.controller';
import { getTargetAccountController, createSetTargetController, deleteTargetController } from './setTarget.controller';
import { getCalorieTargetUserController,deleteCalorieTargetUserController } from './calorieTarget.controller';
import {createSaveExerciseController,getSaveExerciseController, deleteSaveExerciseController } from './saveExercise.controller'
import { getSaveFoodController, createSaveFoodController, deleteSaveFoodController } from './saveFood.controller';

const controllers = {
    account: {
        getAllUserController,
        loginBasicController,
        loginJWTController,
        createAccountController,
        updateAccountController,
        deleteAccountController
    },
    food: {
        getAllFoodController,
        getFoodsAndIngredientsController,
        createFoodController,
        updateFoodController,
        deleteFoodController
    },
    exercise: {
        showExerciseController,
        createExerciseController,
        deleteExerciseController
    },
    comment: {
        getCommentController,
        crateCommentController,
        createCommentReplyController,
        updateCommentController,
        deleteCommentController
    },
    target: {
        getTargetAccountController,
        createSetTargetController,
        deleteTargetController,
    
    },
    caloriesTarget: {
        getCalorieTargetUserController,
        deleteCalorieTargetUserController,
       
    },
    saveExercise:{
        createSaveExerciseController,
        getSaveExerciseController,
        deleteSaveExerciseController
    },
    saveFood: {
        getSaveFoodController,
        createSaveFoodController,
        deleteSaveFoodController
    }
}

export default controllers;
