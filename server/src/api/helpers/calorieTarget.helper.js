import db from '../../config/database';

const CalorieTarget = db.caloriesTarget;

const getCalorieTargetExDB = () => {
    return new Promise( async (resolve, reject) => {
        try { 
            console.log(`555+`);
            const calorieTarget = await CalorieTarget.findAll()
            return resolve(calorieTarget);
        } catch (error) {
            return reject(error)
        }
    }); 
}

const createCaloriesTargetExDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const newCaloriesTarget = await CalorieTarget.create(content);

            return resolve(newCaloriesTarget);
        } catch (error) {
            return reject(error);
        }
    });
}

const getOneCaloriesTargetExDB = () => {
    return new Promise( async (resolve, reject) => {

    });
}

const updateCaloriesTargetExDB = () => {
    return new Promise( async (resolve, reject) => {

    });
}

const deleteCaloriesTargetExDB = (calorieTargetID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const deleteCaloriesTarget = await CalorieTarget.destroy({ where: { calories_target__id: calorieTargetID } });

            return resolve(deleteCaloriesTarget);
        } catch (error) {
            return reject(error);
        }
    });
}

export { getCalorieTargetExDB, getOneCaloriesTargetExDB, createCaloriesTargetExDB, updateCaloriesTargetExDB, deleteCaloriesTargetExDB };