import db from '../../config/database';

const SaveExercise = db.saveExercise;
const Exercise = db.exercise;

const getSaveExerciseDB = (accountID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const exercise = await SaveExercise.findAll({ include: { model: Exercise, attributes: ['exercise_id', 'exercise_name', 'exercise_cal'] }, where: { account_id: accountID }});

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

const deleteSaveExerciseDB = (saveExerciseID) => {
    return new Promise( async (resolve, reject) => {
        console.log(saveExerciseID);
        try {
            const deleteExercise = await SaveExercise.destroy({ where: { save_exercise_id: saveExerciseID } });

            return resolve(deleteExercise);
        } catch (error) {
            return reject(error);
        }
    });
}

export { deleteSaveExerciseDB, crateSaveExerciseDB, getSaveExerciseDB }