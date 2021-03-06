import { getAllUserService, loginBasicService, loginJWTService, createAccountService, updateAccountService, deleteAccountService } from './account.service';
import { getOneTypeAccountService } from './typeAccount.service';
import { getAllFoodService, getFoodAndIngredientsService, createFoodService, updateFoodService, deleteFoodService } from './food.service';
import { getExerciseService, createExerciseService, updateExerciseService, deleteExerciseService } from './exercise.service';
import { getCommentService, createCommentService, createCommentReplyService, updateCommentService, deleteCommentService } from './comment.service';
import {  getTargetAccountService, getDetailTargetService, crateTargetService, updateTargetService, deleteTargetService } from './setTarget.service';
import {getCalorieTargetUserService,deleteCalorieTargetUserService} from './calorieTarget.service'
import {createSaveExerciseService,getSaveExerciseService, deleteSaveExerciseService } from'./saveExercise'
import { getSaveFoodService, createSaveFoodService, deleteSaveFoodService } from './saveFood.service';

const services = {
    account: {
        getAllUserService,
        loginBasicService,
        loginJWTService,
        createAccountService,
        updateAccountService,
        deleteAccountService
    },
    typeAccount: {
        getOneTypeAccountService
    },
    food: {
        getAllFoodService,
        getFoodAndIngredientsService,
        createFoodService,
        updateFoodService,
        deleteFoodService
    },
    exercise: {
        getExerciseService,
        createExerciseService,
        updateExerciseService,
        deleteExerciseService
    },
    comment: {
        getCommentService,
        createCommentService,
        createCommentReplyService,
        updateCommentService,
        deleteCommentService
    },
    target: {
        getTargetAccountService,
        getDetailTargetService,
        crateTargetService,
        updateTargetService,
        deleteTargetService
    },
    calories:{
        getCalorieTargetUserService,
        deleteCalorieTargetUserService
    },
    saveExercise:{
        createSaveExerciseService,
        getSaveExerciseService,
        deleteSaveExerciseService
    },
    saveFood: {
        getSaveFoodService,
        createSaveFoodService,
        deleteSaveFoodService
    }
};

export default services;
