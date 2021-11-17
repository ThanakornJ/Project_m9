import lodash from 'lodash';
import helpers from '../helpers';
const {deleteSaveExerciseDB,crateSaveExerciseDB,getSaveExerciseDB} = helpers.saveExercise


const createSaveExerciseService = async (accountID, content) => {
    try {
        if (!lodash.isEmpty(content.exerciseID)) {
            return {
                error: true,
                message: 'exercise id not fround'
            }
        } else {
            const newContent = {
                ...content,
                accountID,
                saveAmount: 1
            }
            const newSaveExercise = await crateSaveExerciseDB(newContent);

            return {
                error: false,
                message: 'add Save new exercise successful',
                data: newSaveExercise
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const getSaveExerciseService = async (accountID) => {
    try {
        const saveExercise = await getSaveExerciseDB(accountID);

        return saveExercise;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteSaveExerciseService = async (saveExerciseID) => {
    try {
        if (!lodash.isNumber(saveExerciseID)) {
            return {
                error: false,
                message: 'save exercise id not found'
            }
        } else {
            const deleteSaveExercise = await deleteSaveExerciseDB(saveExerciseID);

            return {
                error: false,
                message: 'delete save exercise successful',
                content: deleteSaveExercise,
                saveExerciseID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

export { createSaveExerciseService, getSaveExerciseService, deleteSaveExerciseService }