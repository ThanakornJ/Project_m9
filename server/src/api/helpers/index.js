import { getAllUserDB, getUserDetailDB, getUserOREmailAccountDB, createUserAccountDB, updateAccountDB, deleteUserAccountDB } from './account.helper';
import { getTypeAccountDB, getOneTypeAccountDB, createTypeAccountDB, updateTypeAccountDB, deleteTypeAccountDB } from './typeAccounts.helper';
import { getFoodDB, crateFoodDB, updateFoodDB, deleteFoodDB } from './foods.helper';
import { getIngredientsFoodMenuDB, createIngredientDB, updateIngredientFoodDB, deleteIngredientFoodDB } from './ingredients.helper';
import { getIngredientTypeDB, getOneIngredientTypeDB, createIngredientTypeDB, updateTypeIngredientDB, deleteTypeIngredientDB } from './ingredientsType.helper';
import { getCaloriesFoodMenuDB, createCaloriesFoodDB, updateCaloriesFoodDB, deleteCaloriesFoodDB } from './caloriesFood.helper';
import { getExerciseDB, getDetailExDB, crateExerciseDB, updateExerciseDB, deleteExerciseDB } from './exercise.helper';
import { getTargetDB, getTargetExDB, createSetTargetDB, updateSetTargetDB, deleteSetTargetDB } from './setTarget.helper';
import { getCalorieTargetExDB, getOneCaloriesTargetExDB, createCaloriesTargetExDB, updateCaloriesTargetExDB, deleteCaloriesTargetExDB } from './calorieTarget.helper';
import { getCommentDB, createCommentDB, updateCommentDB, deleteCommentDB } from './comment.helper';
import { getSaveCaloriesDayDB, getDetailSaveCaloriesDay, createSaveCaloriesDay, updateSaveCaloriesDay, deleteSaveCaloriesDay } from './saveCaloriesDay';
import { deleteSaveExerciseDB,crateSaveExerciseDB,getSaveExerciseDB } from './saveExercise.helper';
import { getSaveFoodDB, createSaveFoodDB, deleteSaveFoodDB } from './saveFood.helper';

const helpers = {
    accounts: {
        getAllUserDB,
        getUserDetailDB,
        getUserOREmailAccountDB,
        createUserAccountDB,
        updateAccountDB,
        deleteUserAccountDB
    },
    typeAccount: {
        getTypeAccountDB,
        getOneTypeAccountDB,
        createTypeAccountDB,
        updateTypeAccountDB,
        deleteTypeAccountDB
    },
    foods: {
        getFoodDB,
        crateFoodDB,
        updateFoodDB,
        deleteFoodDB
    },
    ingredients: {
        getIngredientsFoodMenuDB,
        createIngredientDB,
        updateIngredientFoodDB,
        deleteIngredientFoodDB
    },
    ingredientTypes: {
        getIngredientTypeDB,
        getOneIngredientTypeDB,
        createIngredientTypeDB,
        updateTypeIngredientDB,
        deleteTypeIngredientDB
    },
    caloriesFoods: {
        getCaloriesFoodMenuDB,
        createCaloriesFoodDB,
        updateCaloriesFoodDB,
        deleteCaloriesFoodDB,
    },
    exercise: {
        getExerciseDB,
        getDetailExDB,
        crateExerciseDB,
        updateExerciseDB,
        deleteExerciseDB
    },
    target: {
        getTargetDB,
        getTargetExDB,
        createSetTargetDB,
        updateSetTargetDB,
        deleteSetTargetDB
    },
    caloriesTarget: {
        getCalorieTargetExDB,
        getOneCaloriesTargetExDB,
        createCaloriesTargetExDB,
        updateCaloriesTargetExDB,
        deleteCaloriesTargetExDB
    },
    comment: {
        getCommentDB,
        createCommentDB,
        updateCommentDB,
        deleteCommentDB
    },
    saveCaloriesDay: {
        getSaveCaloriesDayDB,
        getDetailSaveCaloriesDay,
        createSaveCaloriesDay,
        updateSaveCaloriesDay,
        deleteSaveCaloriesDay
    },
    saveExercise:{
        deleteSaveExerciseDB,
        crateSaveExerciseDB,
        getSaveExerciseDB
    },
    saveFood: {
        getSaveFoodDB,
        createSaveFoodDB,
        deleteSaveFoodDB
    }
};

export default helpers;