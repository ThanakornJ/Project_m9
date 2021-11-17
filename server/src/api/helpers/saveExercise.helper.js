import db from '../../config/database';

const SaveExercise = db.saveExercise;

const getSaveExerciseDB = (accountID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const exercise = await SaveExercise({ where: { account_id: accountID }});

            return resolve(exercise);
        } catch (error) {
            return reject(error);
        }
    });
}

const crateSaveExerciseDB = (content) => {
    return new Promise(async (resolve,reject)=>{
        try{
            const exercise = await SaveExercise.create(content);
            return resolve(exercise);
        }
        catch(error){
            return reject(error);
        }
    });
}

const deleteSaveExerciseDB = (exerciseID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const deleteExercise = await SaveExercise.destroy({ where: { exercise_id: exerciseID } });

            return resolve(deleteExercise);
        } catch (error) {
            return reject(error);
        }
    });
}

export { deleteSaveExerciseDB, crateSaveExerciseDB, getSaveExerciseDB }