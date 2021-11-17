import lodash from 'lodash';
import helpers from '../helpers';
import { isExerciseContent } from '../validations';


const { getExerciseDB, getDetailExDB, crateExerciseDB, updateExerciseDB, deleteExerciseDB } = helpers.exercise;

const getExerciseService = async () => {
    try {
        const exercises = await getExerciseDB();

        return exercises;
    } catch (error) {
        throw new Error(error);
    }
}

const createExerciseService = async (content) => {
    try {
        const checkExercise = await isExerciseContent(content);

        if (checkExercise.error) {
            return {
                error: checkExercise.error,
                message: checkExercise.message
            }
        } else {
            const newExercise = await crateExerciseDB(content);

            return {
                error: false,
                message: 'add new exercise successful',
                data: newExercise
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const updateExerciseService = async () => {

}

const deleteExerciseService = async (exerciseID) => {
    try {
        if (!lodash.isNumber(exerciseID)) {
            return {
                error: true,
                message: 'Exercise id not found'
            }
        } else {
            const deleteExercise = await deleteExerciseDB(exerciseID);

            return {
                error: false,
                message: 'delete exercise successful',
                content: deleteExercise,
                exerciseID: exerciseID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}


export { getExerciseService, createExerciseService, updateExerciseService, deleteExerciseService }