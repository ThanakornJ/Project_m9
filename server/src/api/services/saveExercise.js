import lodash from 'lodash';
import helpers from '../helpers';
import { isExerciseContent } from '../validations';
const {deleteSaveExerciseDB,crateSaveExerciseDB,getSaveExerciseDB} = helpers.saveExercise
const createSaveExerciseService = async (content) => {
    try {
        const checkExercise = await isExerciseContent(content);

        if (checkExercise.error) {
            return {
                error: checkExercise.error,
                message: checkExercise.message
            }
        } else {
            const newSaveExercise = await crateSaveExerciseDB(content);

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
        const targets = await getTargetDB(accountID);

        return targets;
    } catch (error) {
        throw new Error(error);
    }
}
export { createSaveExerciseService,getSaveExerciseService}