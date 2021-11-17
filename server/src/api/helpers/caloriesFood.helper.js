import db from '../../config/database';

const CaloriesFood = db.caloriesFood;

const getCaloriesFoodMenuDB = (content, column = 'caloriesFoodID') => {
    return new Promise( async (resolve, reject) => {
        try {
            const caloriesFood = await CaloriesFood.findOne({ where: { [column]: content } });

            return resolve(caloriesFood);
        } catch (error) {
            return reject(error);
        }
    });
}

const createCaloriesFoodDB = (content)=> {
    return new Promise( async (resolve, reject) => {
        try {
            const newCaloriesFood = await CaloriesFood.create(content);

            return resolve(newCaloriesFood);
        } catch (error) {
            return reject(error);
        }
    });
}

const updateCaloriesFoodDB = () => {
    return new Promise( async (resolve, reject) => {

    });
}

const deleteCaloriesFoodDB = () => {
    return new Promise( async () => {

    });
}

export { getCaloriesFoodMenuDB, createCaloriesFoodDB, updateCaloriesFoodDB, deleteCaloriesFoodDB };