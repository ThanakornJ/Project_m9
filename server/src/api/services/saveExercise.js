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
export { createSaveExerciseService,getSaveExerciseService}