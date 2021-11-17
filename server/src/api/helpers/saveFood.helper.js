import db from '../../config/database';

const SaveFood = db.saveFood;

const getSaveFoodDB = (accountID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const saveFoods = await SaveFood.findAll({ where: { account_id: accountID } });

            return resolve(saveFoods);
        } catch (error) {
            return reject(error);
        }
    });
}

const createSaveFoodDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const newSaveFood = await SaveFood.create(content);

            return resolve(newSaveFood);
        } catch (error) {
            return reject(error);
        }
    });
}

const deleteSaveFoodDB = (saveFoodID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const deleteSaveFood = await SaveFood.destroy({ where: { save_food_id: saveFoodID } });

            return deleteSaveFood;
        } catch (error) {
            return reject(error);
        }
    });
}

export { getSaveFoodDB, createSaveFoodDB, deleteSaveFoodDB };