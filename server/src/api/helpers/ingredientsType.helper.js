import db from '../../config/database';

const IngredientType = db.ingredientTypes;

const getIngredientTypeDB = () => {
    return new Promise( async (resolve, reject) => {
        try {
            const ingredientType = await IngredientType.findAll();

            return resolve(ingredientType);
        } catch (error) {
            return reject(error);
        }
    });
}

const getOneIngredientTypeDB = (ingredientTypeID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const ingredientType = await IngredientType.findOne({ where: { ingredient_type_id: ingredientTypeID } });

            return resolve(ingredientType);
        } catch (error) {
            return reject(error);
        }
    });
}

const createIngredientTypeDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const newIngredientType = await IngredientType.create(content);

            return resolve(newIngredientType);
        } catch (error) {
            return reject(error);
        }
    });
}

const updateTypeIngredientDB = (foodID, content) => {
    return new Promise( async (resolve, reject) => {
        
    });
}

const deleteTypeIngredientDB = () => {
    return new Promise( async (resolve, reject) => {

    });
}

export { getIngredientTypeDB, getOneIngredientTypeDB, createIngredientTypeDB, updateTypeIngredientDB, deleteTypeIngredientDB };