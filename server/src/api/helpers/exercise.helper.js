import db from '../../config/database';

const Exercise = db.exercise;

const getExerciseDB = () => {
    return new Promise( async (resolve, reject) => {
        try {
            const exercise = await Exercise.findAll();

            return resolve(exercise);
        } catch (error) {
            return reject(error);
        }
    });
}

const getDetailExDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const exercise = await Exercise.findOne({ where: { exercise_id: content } });

            return resolve(exercise);
        } catch (error) {
            return reject(error);
        }
    });
}

const crateExerciseDB = (content) => {
    return new Promise(async (resolve,reject)=>{
        try{
            const exercise = await Exercise.create(content);
            return resolve(exercise);
        }
        catch(error){
            return reject(error);
        }
    });
}

const updateExerciseDB = () => {
    return new Promise((resolve, reject) => {
        
    });
}

const deleteExerciseDB = (exerciseID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const deleteExercise = await Exercise.destroy({ where: { exercise_id: exerciseID } });

            return resolve(deleteExercise);
        } catch (error) {
            return reject(error);
        }
    });
}

export { getExerciseDB, getDetailExDB, crateExerciseDB, updateExerciseDB, deleteExerciseDB }

